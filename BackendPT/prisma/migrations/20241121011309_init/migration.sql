/*
  Warnings:

  - You are about to drop the column `newLink` on the `news` table. All the data in the column will be lost.
  - Added the required column `Url` to the `news` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "news" DROP COLUMN "newLink",
ADD COLUMN     "Url" TEXT NOT NULL;
