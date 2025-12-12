-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'MENTOR');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'COMPLETED');

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "profileUrl" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentProfiles" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "resumeUrl" TEXT,
    "rollNo" TEXT,
    "department" TEXT,
    "cgpa" DOUBLE PRECISION,
    "skills" TEXT[],
    "introduction" TEXT,
    "mentorId" INTEGER,

    CONSTRAINT "StudentProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentorProfiles" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "designation" TEXT,
    "department" TEXT,

    CONSTRAINT "MentorProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Internships" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "tags" TEXT[],
    "skills" TEXT[],
    "cutoff" DOUBLE PRECISION,
    "ctc" DOUBLE PRECISION,
    "duration" TEXT,
    "mode" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Internships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Applications" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "internshipId" INTEGER NOT NULL,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'PENDING',
    "feedback" TEXT,
    "appliedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavedInternships" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "internshipId" INTEGER NOT NULL,
    "savedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SavedInternships_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "StudentProfiles_userId_key" ON "StudentProfiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "MentorProfiles_userId_key" ON "MentorProfiles"("userId");

-- AddForeignKey
ALTER TABLE "StudentProfiles" ADD CONSTRAINT "StudentProfiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentProfiles" ADD CONSTRAINT "StudentProfiles_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "MentorProfiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorProfiles" ADD CONSTRAINT "MentorProfiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Applications" ADD CONSTRAINT "Applications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Applications" ADD CONSTRAINT "Applications_internshipId_fkey" FOREIGN KEY ("internshipId") REFERENCES "Internships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedInternships" ADD CONSTRAINT "SavedInternships_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedInternships" ADD CONSTRAINT "SavedInternships_internshipId_fkey" FOREIGN KEY ("internshipId") REFERENCES "Internships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
