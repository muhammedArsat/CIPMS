import { NextFunction, Request, Response } from "express";
import { prisma } from "../configs/prisma";


/**
 * 
 * @path /api/v1/placement/dashboard (GET)
 * @description function used to fetch all details for the placement Officer Dashboard
 * @access PLACEMENTOFFICER
 * @returns 
 */
export const placementDashboardDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const totalInternships = await prisma.internships.count();

    const applications = await prisma.applications.count();
    const pendingApprovals = await prisma.applications.count({
      where: { status: "PENDING" },
    });
    const approvedApplication = await prisma.applications.count({
      where: { status: "APPROVED" },
    });
    const completedStudents = await prisma.applications.count({
      where: { status: "COMPLETED" },
    });

    const companies = await prisma.internships.findMany({
      distinct: ["companyName"],
    });

    const companyCount = companies.length;

    return res.status(200).json({
      success: true,
      totalInternships,
      completedStudents,
      approvedApplication,
      companyCount,
      applications,
      pendingApprovals,
    });
  } catch (err) {
    next(err);
  }
};
