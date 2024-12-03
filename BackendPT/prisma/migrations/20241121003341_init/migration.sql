-- CreateTable
CREATE TABLE "news" (
    "link_id" SERIAL NOT NULL,
    "P_id" INTEGER NOT NULL,
    "newLink" TEXT NOT NULL,

    CONSTRAINT "news_pkey" PRIMARY KEY ("link_id")
);

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_P_id_fkey" FOREIGN KEY ("P_id") REFERENCES "Page"("P_id") ON DELETE RESTRICT ON UPDATE CASCADE;
