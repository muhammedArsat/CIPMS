import express from "express";
import errorMiddleware from "./middlewares/error.middleware";
import AuthRouter from "./routes/auth.routes";
import passport from "./configs/passport";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(passport.initialize());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
//route for auth routes
app.use("/api/v1/auth", AuthRouter);

//Global error handling middleware
app.use(errorMiddleware);

export default app;
