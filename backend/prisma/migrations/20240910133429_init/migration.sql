-- CreateTable
CREATE TABLE "ImageSlide" (
    "id" SERIAL NOT NULL,
    "filePath" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ImageSlide_pkey" PRIMARY KEY ("id")
);
