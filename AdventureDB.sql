-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema AdventureDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema AdventureDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `AdventureDB` DEFAULT CHARACTER SET utf8 ;
USE `AdventureDB` ;

-- -----------------------------------------------------
-- Table `AdventureDB`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AdventureDB`.`User` (
  `email` VARCHAR(40) NOT NULL,
  `password` VARCHAR(35) NOT NULL,
  `first_name` VARCHAR(20) NULL,
  `last_name` VARCHAR(20) NULL,
  `address` VARCHAR(30) NULL,
  `city` VARCHAR(20) NULL,
  `state` VARCHAR(3) NULL,
  `zipcode` INT NULL,
  `type_of_user` VARCHAR(15) NULL,
  PRIMARY KEY (`email`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AdventureDB`.`Tours`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AdventureDB`.`Tours` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `start_location` VARCHAR(45) NULL,
  `end_location` VARCHAR(45) NULL,
  `start_date` DATE NULL,
  `end_date` DATE NULL,
  `cost` DECIMAL(2) NULL,
  `tour_description` VARCHAR(400) NULL,
  `num_avail` INT NULL,
  `tour_name` VARCHAR(45) NULL,
  `continent` VARCHAR(17) NULL,
  `tour_image` VARCHAR(250) NULL,
  `map_image` VARCHAR(250) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AdventureDB`.`Bookings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AdventureDB`.`Bookings` (
  `booking_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(45) NULL,
  `tour_id` INT NULL,
  `paid_status` VARCHAR(6) NULL,
  `date_of_booking` DATE NULL,
  PRIMARY KEY (`booking_id`),
  INDEX `FK_TourID_idx` (`tour_id` ASC),
  INDEX `FK_UserID_idx` (`user_id` ASC),
  CONSTRAINT `FK_TourID`
    FOREIGN KEY (`tour_id`)
    REFERENCES `AdventureDB`.`Tours` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_UserID`
    FOREIGN KEY (`user_id`)
    REFERENCES `AdventureDB`.`User` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AdventureDB`.`Itinerary`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AdventureDB`.`Itinerary` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `day` INT NULL,
  `description` MEDIUMTEXT NULL,
  `tour_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKTourID_idx` (`tour_id` ASC),
  CONSTRAINT `FKTourID`
    FOREIGN KEY (`tour_id`)
    REFERENCES `AdventureDB`.`Tours` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;