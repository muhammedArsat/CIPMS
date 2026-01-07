import { NextFunction, Request, Response } from 'express';
import { prisma } from '../configs/prisma';
import { HTTPError } from '../types/custom.types';
import { profile } from 'console';
import cloudinary from '../configs/cloudinary';

/**
 * ------------------
 * @desc Get logged-in student profile
 *  @route GET /api/v1/students/profile
 *  @access private
 */
export const getProfile = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const userId = req.user?.id;
        const profile = await prisma.studentProfiles.findUnique({
            where: { userId },
            include: {
                user: {
                    select: { name: true, email: true, role: true },
                },
            },
        });
        if (!profile) {
            throw new HTTPError('profile not found', 404);
        }
        return res.status(200).json({
            success: true,
            data: profile,
        });
    } catch (err) {
        next(err);
    }
};
/**
 * ---------------------------------------------------------
 * @desc Create student profile
 * @route POST /student/profile
 * ---------------------------------------------------------
 */
export const createProfile = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const userEmail = req.user?.email;
        if (!userEmail) {
            throw new HTTPError('Unauthorized', 401);
        }
        const {
            rollNo,
            department,
            cgpa,
            skills,
            introduction,
            mentorId,
        } = req.body;
        const resumeUrl = req.file?.path;
        const resumePublicId = req.file?.filename;
        if(!resumeUrl){
            throw new HTTPError("Resume upload required",400);
        }
        const newProfile = await prisma.studentProfiles.create({
            data: {
                user:{connect:{email:userEmail}},
                resumeUrl,
                resumePublicId,
                rollNo,
                department,
                cgpa:Number(cgpa),
                skills,
                introduction,
                // mentor:{connect:{id:1}},
            },
        });
        res.status(201).json({
            success: true,
            message: 'Profile created successfully',
            data: newProfile,
        });
    } catch (err) {
        next(err);
    }
};
/**
 * -----------------------------------------------------------
 * @desc Update student profile, update resume
 * @route PUT /student/profile
 * -----------------------------------------------------------
 */
export const updateProfile = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            throw new HTTPError('Unauthorized', 401);
        }
        const existingProfile=await prisma.studentProfiles.findUnique({
            where:{userId},
        })
        if(!existingProfile){
            throw new HTTPError("Profile not found",404);
        }
        // if new resume uploaded -> delete old resume
        if(req.file && existingProfile.resumePublicId){
            await cloudinary.uploader.destroy(
                existingProfile.resumePublicId,
                {
                    resource_type:"raw"
                }
            )
        }
        // update profile
        const updateProfile = await prisma.studentProfiles.update({
            where: { userId },
            data:{
                 ...req.body,
                 resumeUrl:req.file?.path?? existingProfile.resumeUrl,
                 resumePublicId:
                 req.file?.filename?? existingProfile.resumePublicId
                }
        });
        res.status(200).json({
            success: true,
            message: 'Profile updated successfully',
            data: updateProfile,
        });
    } catch (err) {
        next(err);
    }
};
/**
 * -----------------------------------------------------------
 * @desc Get student applications
 * @route GET /student/applications
 * -----------------------------------------------------------
 */
export const getApplications = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const userId = req.user?.id;
        const applications = await prisma.applications.findMany({
            where: { userId },
            include: {
                internship: true,
            },
            orderBy: {
                appliedAt: 'desc',
            },
        });
           return res.status(200).json({
            success: true,
            message: 'Get applications successfull',
            applications
        });
    } catch (err) {
        next(err);
    }
};
/**
 * -----------------------------------------------------------
 * @desc Get saved internships
 * @route GET /student/saved
 * -----------------------------------------------------------
 */
export const getSavedInternships = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const userId = req.user?.id;
        const saved= await prisma.savedInternships.findMany({
            where:{
                userId
            },
            include:{
                internship:true
            }
        })
        res.status(200).json({
            success:true,
            message: 'Get Saved Internship is successfull',
            data:saved
        })
    } catch (err) {
        next(err)
    }
};
/**
 * @desc Get recommendation of internships
 * @route GET /student/recommendations
 */
export const getRecommendations=async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const userId=req.user!.id;
        const existingProfile=await prisma.studentProfiles.findUnique({
            where:{userId}
        })
        if(!existingProfile){
            return res.status(404).json({
                message:"Complete profile first"
            })
        }
        const recommendations=await prisma.internships.findMany({
            where:{
                skills:{
                    hasSome:existingProfile.skills
                }
            },
            take:10
        })
        return res.status(200).json({
             success: true,
             message: 'get recommendation is successfull',
             recommendations
        })
    }
    catch(err){
        next(err)
    }
}
/**
 * -----------------------------------------------------------
 * @desc Get assigned mentor
 * @route GET /student/mentor
 * -----------------------------------------------------------
 */
export const getMentor= async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    try{
       const userId=req.user?.id;
       const student=await prisma.studentProfiles.findUnique({
        where:{userId},
        include:{
            mentor:{
                include:{
                    user:{
                        select:{name:true,email:true}
                    }
                }
            }
        }
       })
       if(!student?.mentor){
        throw new HTTPError("Mentor not assigned",404);
       }
       res.status(200).json({
        success:true,
        message: 'Get mentor is successfull',
        data:student.mentor
       })
    }
    catch(err){
        next(err)
    }
}
