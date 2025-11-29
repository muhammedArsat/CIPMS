import express from "express"

const route=express.Router()

// Retrieve
route.get("/profile")
route.get("/applications")
route.get("/saved")
route.get("/recommendations")
route.get("/mentor")
// Create
route.post("/profile")
// Update
route.put("/profile")

export default route
