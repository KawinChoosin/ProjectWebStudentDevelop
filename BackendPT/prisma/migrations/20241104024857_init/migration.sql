-- CreateTable
CREATE TABLE "Page" (
    "P_id" SERIAL NOT NULL,
    "P_name" TEXT NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("P_id")
);

-- CreateTable
CREATE TABLE "Data" (
    "D_id" SERIAL NOT NULL,
    "P_id" INTEGER NOT NULL,
    "P_data" TEXT NOT NULL,

    CONSTRAINT "Data_pkey" PRIMARY KEY ("D_id")
);

-- CreateIndex
CREATE INDEX "Data_P_id_idx" ON "Data"("P_id");

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_P_id_fkey" FOREIGN KEY ("P_id") REFERENCES "Page"("P_id") ON DELETE RESTRICT ON UPDATE CASCADE;
