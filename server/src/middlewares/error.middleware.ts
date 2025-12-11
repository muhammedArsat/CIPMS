import { NextFunction, Request, Response } from "express";
import { HTTPError } from "../types/types";

//Global Error handling middleware function
const errorMiddleware = (
  err: HTTPError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HTTPError) {
    console.log(err); // Log full error in console
    return res.status(err.statusCode).json({
      success: false,
      message: err.message, // Generic message for client
    });
  } else {
    console.log(err); // Log unexpected errors
    return res.status(500).json({
      success: false,
      message: "Internal server Error",
    });
  }
};

export default errorMiddleware;
