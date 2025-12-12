import { NextFunction,Request,Response } from "express";
import {prisma} from "../configs/prisma";
import {HTTPError} from "../types/types";

/**
 * GET student profile
 */
export const getProfile = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const userId=req.user.id;
        const profile= await prisma.studentProfiles.findUnique({

        })
        if(!profile){
            throw new HTTPError("profile not found",404);
        }
    }
    catch(err){
        next(err);
    }
}
