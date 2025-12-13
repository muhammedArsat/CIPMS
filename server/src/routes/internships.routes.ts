import express from "express";
import {
  verifyPlacementOfficer,
  verifyToken,
} from "../middlewares/auth.middleware";
import { createAnInternship } from "../controllers/internships.controller";
const router = express.Router();

router.post(
  "/",
  verifyToken,
  verifyPlacementOfficer,
  createAnInternship
);
export default router;
