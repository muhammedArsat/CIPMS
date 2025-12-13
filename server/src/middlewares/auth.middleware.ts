import { NextFunction, Request, Response } from "express";
import { HTTPError } from "../types/types";
import jwt from "jsonwebtoken";
import { REFRESH_TOKEN_SECRET_KEY } from "../configs/env";

/**
 * -----------------------------------------------------------
 * @description middleware to check the availability of the token and allow all the three users
 * @access all
 * ----------------------------------------------------------
 */
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

/**
 * -----------------------------------------------------------
 * @description middleware to check the availability of the token and allow only the student
 * @access STUDENT
 * ----------------------------------------------------------
 */
export const verifyStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const role = req.user;
    if (role !== "STUDENT") {
      throw new HTTPError("You are unauthorized", 401);
    }
    next();
  } catch (err) {
    next(err);
  }
};

/**
 * -----------------------------------------------------------
 * @description middleware to check the availability of the token and allow only the mentor
 * @access MENTOR
 * ----------------------------------------------------------
 */
export const verifyMentor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const role = req.user;
    if (role !== "MENTOR") {
      throw new HTTPError("You are unauthorized", 401);
    }
    next();
  } catch (err) {
    next(err);
  }
};

/**
 * -----------------------------------------------------------
 * @description middleware to check the availability of the token and allow only the placement-officer
 * @access PLACEMENTOFFICER
 * -----------------------------------------------------------
 */
export const verifyPlacementOfficer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const role = req.user;
    if (role !== "PLACEMENTOFFICER") {
      throw new HTTPError("You are unauthorized", 401);
    }
    next();
  } catch (err) {
    next(err);
  }
};
