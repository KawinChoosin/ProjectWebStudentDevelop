-- CreateTable
CREATE TABLE "ImgSlide" (
    "id" SERIAL NOT NULL,
    "detail" TEXT NOT NULL,
    "imgPath" TEXT NOT NULL,

    CONSTRAINT "ImgSlide_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FilePT" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,

    CONSTRAINT "FilePT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "IMG_id" SERIAL NOT NULL,
    "P_id" INTEGER NOT NULL,
    "imgPath" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("IMG_id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "P_id" INTEGER NOT NULL,
    "C_name" TEXT NOT NULL,
    "C_address" TEXT NOT NULL,
    "C_email" TEXT NOT NULL,
    "C_pic" TEXT NOT NULL,
    "C_tel" TEXT NOT NULL,
    "C_detail" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_P_id_fkey" FOREIGN KEY ("P_id") REFERENCES "Page"("P_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_P_id_fkey" FOREIGN KEY ("P_id") REFERENCES "Page"("P_id") ON DELETE RESTRICT ON UPDATE CASCADE;
