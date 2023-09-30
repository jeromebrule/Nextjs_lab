/*
  Warnings:

  - A unique constraint covering the columns `[userEmail]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Contact` MODIFY `userEmail` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Contact_userEmail_key` ON `Contact`(`userEmail`);
