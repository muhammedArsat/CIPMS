import { NextFunction, Request, Response } from "express";
import { HTTPError } from "../types/types";
import jwt from "jsonwebtoken";
import { REFRESH_TOKEN_SECRET_KEY } from "../configs/env";


export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      throw new HTTPError("Token is missing", 401);
    }
    if (!REFRESH_TOKEN_SECRET_KEY) {
      throw new HTTPError("Secret Key is Missing", 500);
    }
    const decode = jwt.verify(token, REFRESH_TOKEN_SECRET_KEY);
    req.user = decode;
    next();
  } catch (err) {
    next(err);
  }
};
