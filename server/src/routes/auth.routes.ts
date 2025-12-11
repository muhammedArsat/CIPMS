import express, { NextFunction, Request, Response } from "express";
import { signin, signOut } from "../controllers/auth.controller";
import passport from "passport";
import { HTTPError } from "../types/types";
import { generateRefreshToken } from "../utils/auth.utils";

import { NODE, CLIENT_URL } from "../configs/env";

const router = express.Router();

//route for normal email and password sign in
router.post("/signin", signin);

//google oAuth redirect function
router.get(
  "/google/callback",
  (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(
      "google",
      { session: false },
      (err: any, user: any, info: any) => {
        if (err) return next(err);

        if (!user) {
          // handle failed login, otherwise it can hang too
          res.redirect(`${CLIENT_URL}`);
          return next(new HTTPError("User not Registered", 401));
        }

        const payload = {
          email: user.email,
          name: user.name,
          role: user.role,
        };

        const token = generateRefreshToken(payload);
        const isProduction = NODE === "production";

        res.cookie("token", token, {
          httpOnly: true,
          secure: isProduction,
          path: "/",
          sameSite: "lax",
          maxAge: 360 * 60 * 60 * 1000,
        });

        return res.redirect(`${CLIENT_URL}/internships`);
      }
    )(req, res, next);
  }
);

//route to trigger google Oauth
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account consent",
  })
);

//route to logout
router.post("/signout", signOut);

export default router;
