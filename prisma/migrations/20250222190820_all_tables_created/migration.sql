-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `driver_license` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `created_at` VARCHAR(191) NOT NULL,
    `admin` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cars` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `available` BOOLEAN NOT NULL,
    `license_plate` VARCHAR(191) NOT NULL,
    `fine_amount` DECIMAL(65, 30) NOT NULL,
    `brand` VARCHAR(191) NOT NULL,
    `create_at` VARCHAR(191) NOT NULL,
    `category_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `specifications` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `car_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `specification_cars` (
    `id` VARCHAR(191) NOT NULL,
    `car_id` VARCHAR(191) NOT NULL,
    `created_at` VARCHAR(191) NOT NULL,
    `specification_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rentals` (
    `id` VARCHAR(191) NOT NULL,
    `start_date` VARCHAR(191) NOT NULL,
    `end_date` VARCHAR(191) NOT NULL,
    `update_date` VARCHAR(191) NOT NULL,
    `total_price` DECIMAL(65, 30) NOT NULL,
    `car_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `created_at` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `car_images` (
    `id` VARCHAR(191) NOT NULL,
    `car_id` VARCHAR(191) NOT NULL,
    `created_at` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cars` ADD CONSTRAINT `cars_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `specifications` ADD CONSTRAINT `specifications_car_id_fkey` FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `specification_cars` ADD CONSTRAINT `specification_cars_car_id_fkey` FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `specification_cars` ADD CONSTRAINT `specification_cars_specification_id_fkey` FOREIGN KEY (`specification_id`) REFERENCES `specifications`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rentals` ADD CONSTRAINT `rentals_car_id_fkey` FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rentals` ADD CONSTRAINT `rentals_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `car_images` ADD CONSTRAINT `car_images_car_id_fkey` FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
