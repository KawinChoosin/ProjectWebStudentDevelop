/*
  Warnings:

  - Added the required column `Url_name` to the `news` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgPath` to the `news` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "news" ADD COLUMN     "Url_name" TEXT NOT NULL,
ADD COLUMN     "imgPath" TEXT NOT NULL;

ALTER TABLE "Company" ADD COLUMN "C_logo" VARCHAR(255) DEFAULT 'default-logo.png';
ALTER TABLE "Company" ADD COLUMN "C_salary" FLOAT DEFAULT 0.0;

-- Update existing rows if needed
UPDATE "Company" SET "C_logo" = 'default-logo.png' WHERE "C_logo" IS NULL;
UPDATE "Company" SET "C_salary" = 0.0 WHERE "C_salary" IS NULL;
