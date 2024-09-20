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
