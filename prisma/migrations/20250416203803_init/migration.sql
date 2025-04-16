-- CreateTable
CREATE TABLE `link` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `urlOriginal` VARCHAR(191) NOT NULL,
    `urlShorten` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `link_urlShorten_key`(`urlShorten`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
