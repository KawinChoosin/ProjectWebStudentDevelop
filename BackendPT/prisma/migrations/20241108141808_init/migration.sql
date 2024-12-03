/*
  Warnings:

  - Made the column `C_coordinate` on table `Company` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "C_coordinate" SET NOT NULL;
