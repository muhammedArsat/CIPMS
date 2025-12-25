/*
  Warnings:

  - You are about to drop the column `resumeUrl` on the `StudentProfiles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "StudentProfiles" DROP COLUMN "resumeUrl",
ADD COLUMN     "resume" TEXT,
ADD COLUMN     "resumePublicId" TEXT;
