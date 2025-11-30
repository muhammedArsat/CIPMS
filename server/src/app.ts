import express from "express";
import errorMiddleware from "./middlewares/error.middleware";
import AuthRouter from "./routes/auth.routes";
const app = express();
app.use(express.json());

//route for auth routes
app.use("/api/v1/auth", AuthRouter);

//Global error handling middleware
app.use(errorMiddleware);

export default app;
