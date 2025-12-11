import express from "express"

const route=express.Router()
// Retrieve
route.get("/mentees/:studentId/applications")
route.get("/mentees/:studentId")
route.get("/profile")
route.get("/mentees")

// Create
route.post("/profile")
// Update
route.put("/profile")

export default route
