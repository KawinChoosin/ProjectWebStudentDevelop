/*
  Warnings:

  - You are about to drop the column `show` on the `Image` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "show",
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;
