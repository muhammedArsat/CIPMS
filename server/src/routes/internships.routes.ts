import express from "express";
import {
  verifyPlacementOfficer,
  verifyToken,
} from "../middlewares/auth.middleware";
import { createAnInternship, fetchAllInternships } from "../controllers/internships.controller";
const router = express.Router();

router.post(
  "/",
  verifyToken,
  verifyPlacementOfficer,
  createAnInternship
);

router.get("/",verifyToken,fetchAllInternships);
export default router;
