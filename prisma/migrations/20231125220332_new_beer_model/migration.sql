/*
  Warnings:

  - You are about to drop the column `beerId` on the `Beer` table. All the data in the column will be lost.
  - Added the required column `drinkerId` to the `Beer` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Beer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "drinkerId" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "localisation" TEXT NOT NULL,
    "content" TEXT,
    CONSTRAINT "Beer_drinkerId_fkey" FOREIGN KEY ("drinkerId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Beer" ("content", "date", "id", "localisation") SELECT "content", "date", "id", "localisation" FROM "Beer";
DROP TABLE "Beer";
ALTER TABLE "new_Beer" RENAME TO "Beer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
