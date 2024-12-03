/*
  Warnings:

  - The primary key for the `Company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `C_address` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `C_coordinate` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `C_email` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `C_tel` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `index` on the `Company` table. All the data in the column will be lost.
  - The `status` column on the `Company` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `C_logo` on table `Company` required. This step will fail if there are existing NULL values in that column.
  - Made the column `C_salary` on table `Company` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Company" DROP CONSTRAINT "Company_pkey",
DROP COLUMN "C_address",
DROP COLUMN "C_coordinate",
DROP COLUMN "C_email",
DROP COLUMN "C_tel",
DROP COLUMN "id",
DROP COLUMN "index",
ADD COLUMN     "C_id" SERIAL NOT NULL,
ADD COLUMN     "C_index" SERIAL NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "C_logo" SET NOT NULL,
ALTER COLUMN "C_logo" DROP DEFAULT,
ALTER COLUMN "C_logo" SET DATA TYPE TEXT,
ALTER COLUMN "C_salary" SET NOT NULL,
ALTER COLUMN "C_salary" DROP DEFAULT,
ALTER COLUMN "C_salary" SET DATA TYPE TEXT,
ADD CONSTRAINT "Company_pkey" PRIMARY KEY ("C_id");

-- DropEnum
DROP TYPE "CompanyStatus";

-- CreateTable
CREATE TABLE "Address" (
    "A_id" SERIAL NOT NULL,
    "C_id" INTEGER NOT NULL,
    "A_address" TEXT NOT NULL,
    "A_subdist" TEXT NOT NULL,
    "A_dist" TEXT NOT NULL,
    "A_province" TEXT NOT NULL,
    "A_post" TEXT NOT NULL,
    "A_email" TEXT NOT NULL,
    "A_tel" TEXT NOT NULL,
    "A_coordinate" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("A_id")
);

-- CreateTable
CREATE TABLE "Major" (
    "M_id" SERIAL NOT NULL,
    "M_name" TEXT NOT NULL,

    CONSTRAINT "Major_pkey" PRIMARY KEY ("M_id")
);

-- CreateTable
CREATE TABLE "Worktype" (
    "WT_id" SERIAL NOT NULL,
    "WT_name" TEXT NOT NULL,

    CONSTRAINT "Worktype_pkey" PRIMARY KEY ("WT_id")
);

-- CreateTable
CREATE TABLE "CompanyMajor" (
    "CM_id" INTEGER NOT NULL,
    "M_id" INTEGER NOT NULL,
    "CM_select" BOOLEAN NOT NULL,

    CONSTRAINT "CompanyMajor_pkey" PRIMARY KEY ("CM_id","M_id")
);

-- CreateTable
CREATE TABLE "CompanyWorkType" (
    "CWT_id" INTEGER NOT NULL,
    "WT_id" INTEGER NOT NULL,
    "CWT_select" BOOLEAN NOT NULL,

    CONSTRAINT "CompanyWorkType_pkey" PRIMARY KEY ("WT_id","CWT_id")
);

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_C_id_fkey" FOREIGN KEY ("C_id") REFERENCES "Company"("C_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyMajor" ADD CONSTRAINT "CompanyMajor_CM_id_fkey" FOREIGN KEY ("CM_id") REFERENCES "Company"("C_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyMajor" ADD CONSTRAINT "CompanyMajor_M_id_fkey" FOREIGN KEY ("M_id") REFERENCES "Major"("M_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyWorkType" ADD CONSTRAINT "CompanyWorkType_CWT_id_fkey" FOREIGN KEY ("CWT_id") REFERENCES "Company"("C_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyWorkType" ADD CONSTRAINT "CompanyWorkType_WT_id_fkey" FOREIGN KEY ("WT_id") REFERENCES "Worktype"("WT_id") ON DELETE RESTRICT ON UPDATE CASCADE;
