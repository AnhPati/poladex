/*
  Warnings:

  - Added the required column `beerId` to the `Beer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Beer` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Beer" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "beerId" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "localisation" TEXT NOT NULL,
    "content" TEXT,
    CONSTRAINT "Beer_id_fkey" FOREIGN KEY ("id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Beer" ("content", "date", "id", "localisation") SELECT "content", "date", "id", "localisation" FROM "Beer";
DROP TABLE "Beer";
ALTER TABLE "new_Beer" RENAME TO "Beer";
CREATE UNIQUE INDEX "Beer_id_key" ON "Beer"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
