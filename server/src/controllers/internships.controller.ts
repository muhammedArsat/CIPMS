import { NextFunction, Request, Response } from "express";
import { prisma } from "../configs/prisma";
import { getCompanyDomain } from "../utils/internship.utils";
import { title } from "process";

/**
 * @description function to create a new internship by placement officer
 * @path /api/v1/internships(POST)
 * @access PLACEMENTOFFICER
 */
export const createAnInternship = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      title,
      description,
      tags,
      skills,
      cutoff,
      ctc,
      duration,
      mode,
      companyUrl,
      location,
    } = req.body;

    const logoUrl = getCompanyDomain(companyUrl);
    const internship = await prisma.internships.create({
      data: {
        title,
        description,
        tags,
        skills,
        cutoff,
        ctc,
        duration,
        mode,
        logoUrl,
        location,
        companyUrl,
      },
    });

    res.status(200).json({
      success: true,
      message: "Internship created successfully",
      internship,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * @description function to get all internships by ALL users;
 * @path /api/v1/internships (GET)
 * @access STUDENT, MENTOR, PLACEMENTOFFICER
 */

export const fetchAllInternships = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = req.query.search as string;
    const skip = (page - 1) * limit;
    const where = search
      ? {
          OR: [
            { title: { contains: search, mode: "insensitive" as const } },
            { description: { contains: search, mode: "insensitive" as const } },
            { tags: { hasSome: [search] } },
            { skills: { hasSome: [search] } },
            { location: { contains: search, mode: "insensitive" as const } },
            { companyUrl: { contains: search, mode: "insensitive" as const } },
          ],
        }
      : {};
    const total = await prisma.internships.count({ where });

    const internships = await prisma.internships.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json({
      success: true,
      message: "Internships fetched successfully",
      internships,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    next(err);
  }
};
