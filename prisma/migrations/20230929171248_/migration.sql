/*
  Warnings:

  - You are about to drop the column `email` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Profile` DROP COLUMN `email`,
    ADD COLUMN `userCompanyName` VARCHAR(191) NULL,
    ADD COLUMN `userEmail` VARCHAR(191) NULL,
    ADD COLUMN `userPhone` VARCHAR(191) NULL,
    ADD COLUMN `userWebsite` VARCHAR(191) NULL;
