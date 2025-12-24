import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../configs/cloudinary";

const storage =new CloudinaryStorage({
    cloudinary,
    params:async (req,file)=>({
        folder:"student_resume",
        resource_type:"raw",
        format:file.originalname.split(".").pop(),// pdf/doc/docx
    })
})
export const uploadResume=multer({storage});
