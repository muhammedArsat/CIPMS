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
  updateInternship,
} from "../controllers/internships.controller";
const router = express.Router();

router.post("/", verifyToken, verifyPlacementOfficer, createAnInternship);

/**
 * @description route to fetch all the internships
 */
router.get("/", verifyToken, fetchAllInternships);

/**
 * @description route to fetch details of a particular internships
 */

router.get("/detail/:id", verifyToken, fetchInternship);
router.delete("/:id", verifyToken, verifyPlacementOfficer, deleteInternship);
router.put("/", verifyToken, verifyPlacementOfficer, updateInternship);
export default router;
