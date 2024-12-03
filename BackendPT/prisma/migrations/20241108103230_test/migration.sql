/*
  Warnings:

  - Added the required column `C_coordinate` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CompanyStatus" AS ENUM ('WAIT', 'PASS', 'DELETE');

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "C_coordinate" TEXT NOT NULL,
ADD COLUMN     "status" "CompanyStatus" NOT NULL DEFAULT 'WAIT';
