/*
  Warnings:

  - You are about to drop the `CompanyMajor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CompanyWorkType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Major` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Worktype` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CompanyMajor" DROP CONSTRAINT "CompanyMajor_CM_id_fkey";

-- DropForeignKey
ALTER TABLE "CompanyMajor" DROP CONSTRAINT "CompanyMajor_M_id_fkey";

-- DropForeignKey
ALTER TABLE "CompanyWorkType" DROP CONSTRAINT "CompanyWorkType_CWT_id_fkey";

-- DropForeignKey
ALTER TABLE "CompanyWorkType" DROP CONSTRAINT "CompanyWorkType_WT_id_fkey";

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "C_companyMajor" TEXT[],
ADD COLUMN     "C_companyWorkType" TEXT[];

-- DropTable
DROP TABLE "CompanyMajor";

-- DropTable
DROP TABLE "CompanyWorkType";

-- DropTable
DROP TABLE "Major";

-- DropTable
DROP TABLE "Worktype";
