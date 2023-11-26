-- CreateTable
CREATE TABLE "Beer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "drinkerId" TEXT NOT NULL,
    "beerId" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "location" TEXT NOT NULL,
    "content" TEXT,
    CONSTRAINT "Beer_drinkerId_fkey" FOREIGN KEY ("drinkerId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Beer_beerId_key" ON "Beer"("beerId");
