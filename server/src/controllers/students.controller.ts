import { NextFunction, Request, Response } from 'express';
import { prisma } from '../configs/prisma';
import { HTTPError } from '../types/custom.types';
import { profile } from 'console';

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
        const userId = req.user?.id;
        if (!userId) {
            throw new HTTPError('Unauthorized', 401);
        }
        const {
            resumeUrl,
            rollNo,
            department,
            cgpa,
            skills,
            introduction,
            mentorId,
        } = req.body;
        const existing = await prisma.studentProfiles.create({
            data: {
                userId,
                resumeUrl,
                rollNo,
                department,
                cgpa,
                skills,
                introduction,
                mentorId,
            },
        });
        res.status(201).json({
            sucess: true,
            message: 'Profile created successfully',
            data: profile,
        });
    } catch (err) {
        next(err);
    }
};
/**
 * -----------------------------------------------------------
 * @desc Update student profile
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
            const updateProfile = await prisma.studentProfiles.update({
                where: { userId },
                data: req.body,
            });
        }
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
            sucess:true,
            data:saved
        })
    } catch (err) {
        next(err)
    }
};
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
        data:student.mentor
       })
    }
    catch(err){
        next(err)
    }
}
