-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: oviva
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assessment-questions`
--

DROP TABLE IF EXISTS `assessment-questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assessment-questions` (
  `questionId` int NOT NULL AUTO_INCREMENT,
  `questionText` text,
  `healthFact` text,
  `userUUID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`questionId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `assessment-responses`
--

DROP TABLE IF EXISTS `assessment-responses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assessment-responses` (
  `responseId` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `questionId` int DEFAULT NULL,
  `AnswerText` varchar(250) DEFAULT NULL,
  `score` int DEFAULT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `userUUID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`responseId`),
  KEY `assessment-responses_ibfk_2` (`questionId`),
  KEY `assessment-responses_ibfk_1` (`userId`),
  CONSTRAINT `assessment-responses_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `assessment-responses_ibfk_2` FOREIGN KEY (`questionId`) REFERENCES `assessment-questions` (`questionId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `blogId` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `category` enum('diet','mentalHealth','pos','exercise','inspiration') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `topic` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`blogId`),
  KEY `blogs_users_FK` (`userId`),
  CONSTRAINT `blogs_users_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `calendar`
--

DROP TABLE IF EXISTS `calendar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calendar` (
  `calendarId` int NOT NULL,
  `date` date DEFAULT NULL,
  `note` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`calendarId`),
  KEY `calendar_users_FK` (`userId`),
  CONSTRAINT `calendar_users_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cycle_phases`
--

DROP TABLE IF EXISTS `cycle_phases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cycle_phases` (
  `phaseId` int NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `phase` enum('menstrual','follicular','ovulatory','luteal') DEFAULT NULL,
  `description` text,
  `calendarId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`phaseId`),
  KEY `cycle_phases_users_FK` (`userId`),
  KEY `cycle_phases_calendar_FK` (`calendarId`),
  CONSTRAINT `cycle_phases_calendar_FK` FOREIGN KEY (`calendarId`) REFERENCES `calendar` (`calendarId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ingredients`
--

DROP TABLE IF EXISTS `ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingredients` (
  `ingredientId` int NOT NULL,
  `recipeId` int DEFAULT NULL,
  `name` varchar(250) DEFAULT NULL,
  `quantity` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ingredientId`),
  KEY `ingredients_recipes_FK` (`recipeId`),
  CONSTRAINT `ingredients_recipes_FK` FOREIGN KEY (`recipeId`) REFERENCES `recipes` (`recipeId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `moods`
--

DROP TABLE IF EXISTS `moods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moods` (
  `moodId` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `calendarId` int DEFAULT NULL,
  `moodType` enum('sadness','irritability','fatigue','anxiety','highEnergy','emotionalStability','hapiness','greaterConfidence','notSociable') DEFAULT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`moodId`),
  KEY `moods_users_FK` (`userId`),
  KEY `moods_calendar_FK` (`calendarId`),
  CONSTRAINT `moods_calendar_FK` FOREIGN KEY (`calendarId`) REFERENCES `calendar` (`calendarId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `moods_users_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `paymentId` int NOT NULL,
  `userId` int DEFAULT NULL,
  `amount` decimal(10,2) NOT NULL,
  `currency` varchar(3) NOT NULL,
  `paymentMethodId` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` enum('pending','completed','failed','refunded') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `date` date DEFAULT NULL,
  `lastUpdated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `description` text,
  `paymentIntentId` varchar(255) NOT NULL,
  PRIMARY KEY (`paymentId`),
  KEY `payments_users_FK` (`userId`),
  CONSTRAINT `payments_users_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `periods`
--

DROP TABLE IF EXISTS `periods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `periods` (
  `periodId` int NOT NULL AUTO_INCREMENT,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `flowType` enum('abundant','regular','scarce') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pregnant` enum('yes','no') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `calendarId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`periodId`),
  KEY `periods_users_FK` (`userId`),
  KEY `periods_calendar_FK` (`calendarId`),
  CONSTRAINT `periods_calendar_FK` FOREIGN KEY (`calendarId`) REFERENCES `calendar` (`calendarId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `periods_users_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipes` (
  `recipeId` int NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `category` enum('vegan','vegetarian','glutenFree') NOT NULL,
  `type` enum('breakfast','lunch','dinner','snack','dessert') NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(250) DEFAULT NULL,
  `content` longtext,
  `image` varchar(255) DEFAULT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`recipeId`),
  KEY `recipe_users_FK` (`userId`),
  CONSTRAINT `recipe_users_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sex`
--

DROP TABLE IF EXISTS `sex`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sex` (
  `sexId` int NOT NULL AUTO_INCREMENT,
  `calendarId` int NOT NULL,
  `date` date NOT NULL,
  `partner` varchar(255) DEFAULT NULL,
  `protectionUsed` enum('condom','pill','dayafterPill','iud','rhythm','shot','other','none') DEFAULT 'none',
  `pain` enum('yes','no','unsure') DEFAULT 'unsure',
  `lubrication` enum('yes','no','unsure') DEFAULT 'unsure',
  `orgasm` enum('yes','no','unsure') DEFAULT 'unsure',
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`sexId`),
  KEY `sex_calendar_FK` (`calendarId`),
  KEY `sex_users_FK` (`userId`),
  CONSTRAINT `sex_calendar_FK` FOREIGN KEY (`calendarId`) REFERENCES `calendar` (`calendarId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `sex_users_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `survey-objective-user-responses`
--

DROP TABLE IF EXISTS `survey-objective-user-responses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `survey-objective-user-responses` (
  `responseId` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `questionId` int DEFAULT NULL,
  `answerOptionId` int DEFAULT NULL,
  `responseDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `intensity` int DEFAULT NULL,
  `choiceData` text,
  `openAnswer` text,
  `age` int DEFAULT NULL,
  `weight` int DEFAULT NULL,
  `height` decimal(4,2) DEFAULT NULL,
  `userUUID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`responseId`),
  KEY `survey-objective-user-responses_ibfk_3` (`answerOptionId`),
  KEY `survey-objective-user-responses_ibfk_2` (`questionId`),
  KEY `survey-objective-user-responses_ibfk_1` (`userId`),
  CONSTRAINT `survey-objective-user-responses_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `survey-objective-user-responses_ibfk_2` FOREIGN KEY (`questionId`) REFERENCES `surveyobjectives-questions` (`questionId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `survey-objective-user-responses_ibfk_3` FOREIGN KEY (`answerOptionId`) REFERENCES `surveyobjectives-answer-options` (`ansOptionId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `surveyobjectives-answer-options`
--

DROP TABLE IF EXISTS `surveyobjectives-answer-options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `surveyobjectives-answer-options` (
  `ansOptionId` int NOT NULL AUTO_INCREMENT,
  `questionId` int DEFAULT NULL,
  `answerOption` text,
  `userUUID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ansOptionId`),
  KEY `surveyobjectives-answer-options_ibfk_1` (`questionId`),
  CONSTRAINT `surveyobjectives-answer-options_ibfk_1` FOREIGN KEY (`questionId`) REFERENCES `surveyobjectives-questions` (`questionId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `surveyobjectives-questions`
--

DROP TABLE IF EXISTS `surveyobjectives-questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `surveyobjectives-questions` (
  `questionId` int NOT NULL AUTO_INCREMENT,
  `question` text NOT NULL,
  `isMultiple` tinyint(1) DEFAULT NULL,
  `isScorable` tinyint(1) DEFAULT NULL,
  `isTextInput` tinyint(1) DEFAULT NULL,
  `userUUID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`questionId`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `symptoms`
--

DROP TABLE IF EXISTS `symptoms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `symptoms` (
  `symptomId` int NOT NULL AUTO_INCREMENT,
  `calendarId` int DEFAULT NULL,
  `symptomType` enum('abdominalPain','headache','migraine','backPain','bloatin','diarrhea','gas','vomiting','nausea') DEFAULT NULL,
  `date` date DEFAULT NULL,
  `intensity` tinyint DEFAULT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`symptomId`),
  KEY `symptoms_calendar_FK` (`calendarId`),
  KEY `symptoms_users_FK` (`userId`),
  CONSTRAINT `symptoms_calendar_FK` FOREIGN KEY (`calendarId`) REFERENCES `calendar` (`calendarId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `symptoms_users_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `surName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `age` int DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `diagnosed` tinyint(1) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `role` enum('user','admin','invited') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `acceptTerms` tinyint(1) DEFAULT '0',
  `acceptCookies` tinyint(1) DEFAULT '0',
  `subscribeNewsletter` tinyint(1) DEFAULT '0',
  `isSubscribed` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usersettings`
--

DROP TABLE IF EXISTS `usersettings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usersettings` (
  `settingsId` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `language` varchar(10) DEFAULT 'en',
  `notificationEmails` tinyint(1) DEFAULT '1',
  `currency` varchar(3) DEFAULT 'USD',
  `timeZone` varchar(50) DEFAULT 'UTC',
  `autoRenewSubscriptions` tinyint(1) DEFAULT '1',
  `paymentFrequency` enum('monthly','annual') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`settingsId`),
  KEY `usersettings_ibfk_1` (`userId`),
  CONSTRAINT `usersettings_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `videos`
--

DROP TABLE IF EXISTS `videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `videos` (
  `videoId` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `duration` time NOT NULL,
  `category` enum('exercise','diet','mentalHealth','inspiration','pcos') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `topic` varchar(255) NOT NULL,
  `performer` varchar(255) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `url` varchar(255) NOT NULL,
  `timesPlayed` int DEFAULT '0',
  `date` date NOT NULL,
  `userId` int DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`videoId`),
  KEY `videos_users_FK` (`userId`),
  CONSTRAINT `videos_users_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `webinar_registration`
--

DROP TABLE IF EXISTS `webinar_registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `webinar_registration` (
  `registration_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `lastName` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `mainStruggle` varchar(200) DEFAULT NULL,
  `age` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `webinardate`
--

DROP TABLE IF EXISTS `webinardate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `webinardate` (
  `webinarDateId` int NOT NULL AUTO_INCREMENT,
  `activityDate` timestamp NOT NULL,
  PRIMARY KEY (`webinarDateId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping routines for database 'oviva'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-12 12:48:38
