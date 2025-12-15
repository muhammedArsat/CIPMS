import express from "express"
import { verifyToken } from "../middlewares/auth.middleware"
import { getProfile } from "../controllers/students.controller"

const route=express.Router()

// Retrieve
route.get("/profile",verifyToken,getProfile)
route.get("/applications")
route.get("/saved")
route.get("/recommendations")
route.get("/mentor")
// Create
route.post("/profile")
// Update
route.put("/profile")

export default route
