/*
  Warnings:

  - You are about to drop the column `CM_select` on the `CompanyMajor` table. All the data in the column will be lost.
  - You are about to drop the column `CWT_select` on the `CompanyWorkType` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CompanyMajor" DROP COLUMN "CM_select";

-- AlterTable
ALTER TABLE "CompanyWorkType" DROP COLUMN "CWT_select";
