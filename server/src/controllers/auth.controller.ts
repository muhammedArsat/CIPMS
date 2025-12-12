import { NextFunction, Request, Response } from "express";
import { prisma } from "../configs/prisma";
import { HTTPError } from "../types/types";
import bcrypt from "bcrypt";
import { generateRefreshToken } from "../utils/auth.utils";
import { NODE } from "../configs/env";
import { profile } from "node:console";

/**
 * ---------------------------------------------------------
 * @description function to sign-in using email and password
 * @access all
 * @path /api/v1/auth/signin
 * @req {email, password} in body
 * ---------------------------------------------------------
 */
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
      profile: null,
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

/**
 *-------------------------------------------------------------------------
 * @desc this is the function for logout to delete the cookies from the browsers
 * @path /api/v1/auth/signout
 * @access all
 * ------------------------------------------------------------------------
 */
export const signOut = (req: Request, res: Response) => {
  const isProduction = NODE === "production";
  res.clearCookie("token", {
    httpOnly: true,
    secure: isProduction,
    path: "/",
    sameSite: "lax",
  });

  return res.status(200).json({
    success: true,
    message: "Signout successful",
  });
};

/**
 * ------------------------------------------------------------------------
 * @description function to fetch the details of the current logged in user
 * @path /api/v1/auth/getme
 * @access all
 * ------------------------------------------------------------------------
 */
export const fetchDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user;
    return res.status(200).json({
      success: true,
      message: "User detail fetched successfully",
      user,
    });
  } catch (err) {
    next(err);
  }
};
