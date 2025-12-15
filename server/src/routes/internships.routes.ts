import express from "express";
import {
  verifyPlacementOfficer,
  verifyToken,
} from "../middlewares/auth.middleware";
import {
  createAnInternship,
  deleteInternship,
  fetchAllInternships,
  fetchInternship,
} from "../controllers/internships.controller";
const router = express.Router();

router.post("/", verifyToken, verifyPlacementOfficer, createAnInternship);

router.get("/", verifyToken, fetchAllInternships);

router.get("/detail", verifyToken, fetchInternship);
router.delete("/", verifyToken, verifyPlacementOfficer, deleteInternship);
export default router;
