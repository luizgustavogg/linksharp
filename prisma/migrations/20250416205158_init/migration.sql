/*
  Warnings:

  - You are about to drop the column `urlShorten` on the `link` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shortCode]` on the table `link` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shortCode` to the `link` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `link_urlShorten_key` ON `link`;

-- AlterTable
ALTER TABLE `link` DROP COLUMN `urlShorten`,
    ADD COLUMN `shortCode` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `link_shortCode_key` ON `link`(`shortCode`);
