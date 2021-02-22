CREATE DATABASE  IF NOT EXISTS `webshop` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `webshop`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: webshop
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orderlines`
--

DROP TABLE IF EXISTS `orderlines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderlines` (
  `orderId` int NOT NULL,
  `productId` int NOT NULL,
  `quantity` int NOT NULL,
  `price` float DEFAULT NULL,
  KEY `orderId` (`orderId`),
  KEY `productId` (`productId`),
  CONSTRAINT `orderlines_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`),
  CONSTRAINT `orderlines_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderlines`
--

LOCK TABLES `orderlines` WRITE;
/*!40000 ALTER TABLE `orderlines` DISABLE KEYS */;
INSERT INTO `orderlines` VALUES (23,1,3,180),(23,5,1,44.99),(24,1,3,180),(24,5,1,44.99),(25,1,3,180),(25,5,1,44.99),(26,1,3,180),(26,5,1,44.99),(27,1,3,180),(27,5,1,44.99),(28,1,3,180),(28,5,1,44.99),(29,1,3,180),(29,5,1,44.99),(30,1,3,180),(30,5,1,44.99),(31,1,3,180),(31,5,1,44.99),(32,10,3,54.99),(32,2,2,60),(32,3,2,3.99),(32,4,2,19.99),(32,1,2,0.01),(32,9,1,8.19),(32,5,1,44.99),(32,8,1,20.99),(32,6,1,13.99),(32,7,1,9.99),(33,7,1,9.99),(33,10,3,54.99),(33,1,2,0.01),(33,2,2,60),(33,3,2,3.99),(33,4,2,19.99),(33,8,1,20.99),(33,9,1,8.19),(33,5,1,44.99),(33,6,1,13.99),(34,7,1,9.99),(34,10,3,54.99),(34,1,2,0.01),(34,2,2,60),(34,3,2,3.99),(34,4,2,19.99),(34,8,1,20.99),(34,9,1,8.19),(34,5,1,44.99),(34,6,1,13.99),(35,7,1,9.99),(35,10,3,54.99),(35,1,2,0.01),(35,2,2,60),(35,3,2,3.99),(35,4,2,19.99),(35,8,1,20.99),(35,9,1,8.19),(35,5,1,44.99),(35,6,1,13.99),(36,7,1,9.99),(36,10,3,54.99),(36,1,2,0.01),(36,3,2,3.99),(36,4,2,19.99),(36,2,2,60),(36,8,1,20.99),(36,9,1,8.19),(36,5,1,44.99),(36,6,1,13.99),(37,7,1,9.99),(37,10,3,54.99),(37,1,2,0.01),(37,3,2,3.99),(37,2,2,60),(37,4,2,19.99),(37,8,1,20.99),(37,9,1,8.19),(37,5,1,44.99),(37,6,1,13.99),(38,7,1,9.99),(38,10,3,54.99),(38,1,2,0.01),(38,2,2,60),(38,3,2,3.99),(38,4,2,19.99),(38,8,1,20.99),(38,9,1,8.19),(38,5,1,44.99),(38,6,1,13.99),(39,1,3,0.01),(39,2,1,60),(40,2,1,60),(40,1,1,0.01),(40,3,1,3.99);
/*!40000 ALTER TABLE `orderlines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `street` varchar(255) NOT NULL,
  `number` int NOT NULL,
  `postalCode` varchar(50) NOT NULL,
  `city` varchar(100) NOT NULL,
  `telephoneNumber` varchar(20) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `totalPrice` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (23,'2020-12-29 10:40:51','Aaron','Frans','Leurshoek',61,'9120','Beveren','0476086538','azdefatrhtws@gmail.com',224.99),(24,'2020-12-29 10:41:01','Aaron','Frans','Leurshoek',61,'9120','Beveren','0476086538','azdefatrhtws@gmail.com',18045),(25,'2020-12-29 10:41:15','Aaron','Frans','Leurshoek',61,'9120','Beveren','0476086538','azdefatrhtws@gmail.com',18045),(26,'2020-12-29 10:41:31','Aaron','Frans','Leurshoek',61,'9120','Beveren','0476086538','azdefatrhtws@gmail.com',18045),(27,'2020-12-29 10:44:46','Aaron','Frans','Leurshoek',61,'9120','Beveren','0476086538','azdefatrhtws@gmail.com',224.99),(28,'2020-12-29 10:44:54','Aaron','Frans','Leurshoek',61,'9120','Beveren','0476086538','azdefatrhtws@gmail.com',18045),(29,'2020-12-29 10:45:21','Aaron','Frans','Leurshoek',61,'9120','Beveren','0476086538','azdefatrhtws@gmail.com',18045),(30,'2020-12-29 10:45:52','Aaron','Frans','Leurshoek',61,'9120','Beveren','0476086538','azdefatrhtws@gmail.com',224.99),(31,'2020-12-29 10:46:10','Aaron','Frans','Leurshoek',61,'9120','Beveren','0476086538','azdefatrhtws@gmail.com',224.99),(32,'2020-12-30 12:04:47','Aaron','Frans','Leurshoek',61,'9120','Beveren','+32476086538','azdefatrhtws@gmail.com',237.13),(33,'2020-12-30 12:12:01','Aaron','Frans','Leurshoek 61',61,'9120','Beveren','+32476086538','azdefatrhtws@gmail.com',237.13),(34,'2020-12-30 12:12:47','Aaron','Frans','Leurshoek 61',891480854,'9120','Beveren','+32476086538','azdefatrhtws@gmail.com',237.13),(35,'2020-12-30 12:21:42','Aaron','Frans','Leurshoek 61',61,'9120','Beveren','+32476086538','azdefatrhtws@gmail.com',237.13),(36,'2020-12-30 12:22:14','Aaron','Frans','Leurshoek 61',61,'9120','Beveren','+32476086538','azdefatrhtws@gmail.com',237.13),(37,'2020-12-30 12:22:34','Aaron','Frans','Leurshoek 61',891480854,'9120','Beveren','+32476086538','azdefatrhtws@gmail.com',237.13),(38,'2020-12-30 12:24:34','Aaron','Frans','Leurshoek 61',2469,'9120','Beveren','+32476086538','azdefatrhtws@gmail.com',237.13),(39,'2020-12-30 13:00:40','Aaron','Frans','Leurshoek',61,'9120','Beveren','493504153','aaron.frans@student.howest.be',60.01),(40,'2020-12-31 14:10:59','Aaron','Frans','Leurshoek',61,'9120','Beveren','+32476086538','azdefatrhtws@gmail.com',64);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Fallout 76',0.01,'Fallout 76 is an online action role-playing game developed by Bethesda Game Studios and published by Bethesda Softworks.'),(2,'Cyberpunk 2077',60,'Cyberpunk 2077 is a 2020 action role-playing video game developed and published by CD Projekt. The story takes place in Night City, an open world set in the Cyberpunk universe. Players assume the first-person perspective of a customisable mercenary known as V, who can acquire skills in hacking and machinery with options for melee and ranged combat.'),(3,'Among Us',3.99,'An online and local party game of teamwork and betrayal for 4-10 players...in space!'),(4,'Celeste',19.99,'Help Madeline survive her inner demons on her journey to the top of Celeste Mountain, in this super-tight platformer from the creators of TowerFall. Brave hundreds of hand-crafted challenges, uncover devious secrets, and piece together the mystery of the mountain.'),(5,'Jurassic World Evolution',44.99,'Place yourself at the heart of the Jurassic franchise and build your own Jurassic World. Bioengineer dinosaurs that think, feel and react intelligently to the world around them and face threats posed by espionage, breakouts and devastating tropical storms in an uncertain world where life always finds a way.'),(6,'Stardew Valley',13.99,'You\'ve inherited your grandfather\'s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?'),(7,'Terraria',9.99,'Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!'),(8,'Subnautica',20.99,'Descend into the depths of an alien underwater world filled with wonder and peril. Craft equipment, pilot submarines and out-smart wildlife to explore lush coral reefs, volcanoes, cave systems, and more - all while trying to survive.'),(9,'Don\'t Starve',8.19,'Don’t Starve is an uncompromising wilderness survival game full of science and magic. Enter a strange and unexplored world full of strange creatures, dangers, and surprises. Gather resources to craft items and structures that match your survival style.'),(10,'No Man\'s Sky',54.99,'No Man\'s Sky is a game about exploration and survival in an infinite procedurally generated universe.');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-31 14:25:48
