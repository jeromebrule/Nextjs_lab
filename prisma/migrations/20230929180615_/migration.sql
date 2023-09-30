/*
  Warnings:

  - You are about to drop the column `userId` on the `Contact` table. All the data in the column will be lost.
  - Made the column `userName` on table `Contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userEmail` on table `Contact` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Contact` DROP FOREIGN KEY `Contact_userId_fkey`;

-- AlterTable
ALTER TABLE `Contact` DROP COLUMN `userId`,
    MODIFY `userName` VARCHAR(191) NOT NULL,
    MODIFY `userEmail` VARCHAR(191) NOT NULL;
