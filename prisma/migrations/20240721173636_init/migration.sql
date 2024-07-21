/*
  Warnings:

  - A unique constraint covering the columns `[resetCode]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "image" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_resetCode_key" ON "User"("resetCode");

-- CreateIndex
CREATE INDEX "User_email_resetCodeExpiresAt_idx" ON "User"("email", "resetCodeExpiresAt");
