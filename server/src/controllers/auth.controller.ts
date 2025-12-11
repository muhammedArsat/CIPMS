import { NextFunction, Request, Response } from "express";
import { prisma } from "../configs/prisma";
import { HTTPError } from "../types/types";
import bcrypt from "bcrypt";
import { generateRefreshToken } from "../utils/auth.utils";
import { NODE } from "../configs/env";

//@desc function for normal sign in using email and password field
//@route /api/v1/auth/signin
//@access public
export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    console.log("email", email);
    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      throw new HTTPError("User not found", 404);
    }

    const isPasswordMatch = await bcrypt.compare(user.password, password);

    if (!isPasswordMatch) {
      throw new HTTPError("Invalid credentials", 401);
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

    return res.status(200).json({
      success: true,
      message: "Sign in completed",
      token,
    });
  } catch (err) {
    next(err);
  }
};

export const signOut = ( req: Request,res: Response) => {
  const isProduction = NODE === "production";
 res.clearCookie("token", {
    httpOnly: true,
    secure: isProduction,
    path: "/",
    sameSite: "lax",
  });

  return res.status(200).json({
    success:true,
    message:"Signout successful"
  })
};
