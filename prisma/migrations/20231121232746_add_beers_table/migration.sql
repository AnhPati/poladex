-- CreateTable
CREATE TABLE "Beer" (
    "id" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "localisation" TEXT NOT NULL,
    "content" TEXT,
    CONSTRAINT "Beer_id_fkey" FOREIGN KEY ("id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Beer_id_key" ON "Beer"("id");
