import express from "express"
import { verifyStudent, verifyToken } from "../middlewares/auth.middleware"
import { getProfile,createProfile,updateProfile } from "../controllers/students.controller"

const route=express.Router()

// Retrieve
route.get("/profile",verifyToken,verifyStudent,getProfile)
route.get("/applications",verifyToken,verifyStudent,)
route.get("/saved",verifyToken,verifyStudent,)
route.get("/recommendations",verifyToken,verifyStudent,)
route.get("/mentor",verifyToken,verifyStudent,)
// Create
route.post("/profile",verifyToken,verifyStudent,createProfile)
// Update
route.put("/profile",verifyToken,verifyStudent,updateProfile)
//Delete
route.delete("deleteSaved",verifyToken,verifyStudent)
export default route
