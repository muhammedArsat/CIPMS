import express from "express"

const route=express.Router()
// Retrieve
route.get("/")
// Create
route.post("/add")
// Update
route.put("/remove/:internshipId")

export default route
