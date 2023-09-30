/*
  Warnings:

  - A unique constraint covering the columns `[userEmail]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userEmail` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Profile` ADD COLUMN `userEmail` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Profile_userEmail_key` ON `Profile`(`userEmail`);
