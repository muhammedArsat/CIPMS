import express from "express";
import errorMiddleware from "./middlewares/error.middleware";
import AuthRouter from "./routes/auth.routes";
import InternshipsRouter from "./routes/internships.routes";
import StudentsRouter from "./routes/students.route";
import MentorRouter from "./routes/mentors.route";
import SavedApplicationsRouter from "./routes/savedApplications.route";
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

//route for authentication
app.use("/api/v1/auth", AuthRouter);

//routes for internships
app.use("/api/v1/internships", InternshipsRouter);

//routes for saved applications
// app.use("/api/v1/saved", SavedApplicationsRouter);

//Global error handling middleware
app.use(errorMiddleware);

export default app;
