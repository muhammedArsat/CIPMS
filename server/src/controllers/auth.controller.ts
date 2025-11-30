import { NextFunction, Request, Response } from "express";
import prisma from "../configs/prisma";


//@desc function for normal sign in using email and password field
//@route /api/v1/auth/signin
//@access public
export const signin = async(req:Request, res:Response,next:NextFunction)=>{
    try{

        const {email, password }= req.body;

        const user  = await prisma.

    }catch(err){

    }
}