/*
  Warnings:

  - A unique constraint covering the columns `[car_id]` on the table `car_images` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[license_plate]` on the table `cars` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[car_id]` on the table `specification_cars` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[driver_license]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `car_images_car_id_fkey` ON `car_images`;

-- DropIndex
DROP INDEX `cars_category_id_fkey` ON `cars`;

-- DropIndex
DROP INDEX `rentals_car_id_fkey` ON `rentals`;

-- DropIndex
DROP INDEX `rentals_user_id_fkey` ON `rentals`;

-- DropIndex
DROP INDEX `specification_cars_car_id_fkey` ON `specification_cars`;

-- DropIndex
DROP INDEX `specification_cars_specification_id_fkey` ON `specification_cars`;

-- DropIndex
DROP INDEX `specifications_car_id_fkey` ON `specifications`;

-- CreateIndex
CREATE UNIQUE INDEX `car_images_car_id_key` ON `car_images`(`car_id`);

-- CreateIndex
CREATE UNIQUE INDEX `cars_license_plate_key` ON `cars`(`license_plate`);

-- CreateIndex
CREATE UNIQUE INDEX `specification_cars_car_id_key` ON `specification_cars`(`car_id`);

-- CreateIndex
CREATE UNIQUE INDEX `users_driver_license_key` ON `users`(`driver_license`);

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
