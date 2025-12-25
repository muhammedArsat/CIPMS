import express from "express"
import { verifyStudent, verifyToken } from "../middlewares/auth.middleware"
import { getProfile,createProfile,updateProfile, getApplications, getSavedInternships, getMentor } from "../controllers/students.controller"
import { uploadResume } from "../middlewares/upload.middleware"

const route=express.Router()

// Retrieve
route.get("/profile",verifyToken,verifyStudent,getProfile)
route.get("/applications",verifyToken,verifyStudent,getApplications)
route.get("/saved",verifyToken,verifyStudent,getSavedInternships)
route.get("/recommendations",verifyToken,verifyStudent,)
route.get("/mentor",verifyToken,verifyStudent,getMentor)
// Create
route.post("/profile",verifyToken,verifyStudent,uploadResume.single("resume"),createProfile)
// Update
route.put("/profile",verifyToken,verifyStudent,uploadResume.single("resume"),updateProfile)
//Delete
route.delete("deleteSaved",verifyToken,verifyStudent)
export default route
