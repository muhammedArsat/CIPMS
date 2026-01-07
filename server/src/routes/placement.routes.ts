import express from "express";
import {
  verifyPlacementOfficer,
  verifyToken,
} from "../middlewares/auth.middleware";
import { placementDashboardDetails } from "../controllers/placementOfficer.controller";
const router = express.Router();

router.get(
  "/dashboard",
  verifyToken,
  verifyPlacementOfficer,
  placementDashboardDetails
);
export default router;
