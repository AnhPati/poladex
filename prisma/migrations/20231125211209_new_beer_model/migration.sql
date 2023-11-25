/*
  Warnings:

  - You are about to drop the column `userId` on the `Beer` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Beer" (
    "id" TEXT NOT NULL,
    "beerId" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "localisation" TEXT NOT NULL,
    "content" TEXT,
    CONSTRAINT "Beer_beerId_fkey" FOREIGN KEY ("beerId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Beer" ("beerId", "content", "date", "id", "localisation") SELECT "beerId", "content", "date", "id", "localisation" FROM "Beer";
DROP TABLE "Beer";
ALTER TABLE "new_Beer" RENAME TO "Beer";
CREATE UNIQUE INDEX "Beer_id_key" ON "Beer"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
