-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: transaction_db
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `transaction` (
  `t_id` int(11) NOT NULL AUTO_INCREMENT,
  `rec_accno` varchar(100) DEFAULT NULL,
  `rec_Fname` varchar(30) DEFAULT NULL,
  `rec_Lname` varchar(30) DEFAULT NULL,
  `bank_name` varchar(40) DEFAULT NULL,
  `ifsc_code` varchar(40) DEFAULT NULL,
  `mob_no` int(11) DEFAULT NULL,
  `amt` int(50) DEFAULT NULL,
  `remark` varchar(200) DEFAULT NULL,
  `acc_no` varchar(200) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`t_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES (1,'44585555948','Rucha','Mahabal','HDFC','HDFC123',855468624,5000,'shopping','196548266','2020-06-21 13:18:39'),(2,'42568155','Gayathri','Iyer','Bank of Maharashtra','BOM545',5665952,20000,'class fees','25462511','2020-06-21 13:24:04'),(3,'42568155','Danish','Dhanse','ICICI','ICICI485',54545455,1000,'pizza','452421532','2020-06-21 13:26:10'),(4,'552156225','Rahul','Mehta','DBS','DBS759',23548226,45000,'tour-ladhak','3521358579','2020-06-21 13:32:24'),(5,'5454556554','Natasha','Rebello','IDBI','IDBI103',89566585,10000,'house rent','196548266','2020-06-21 13:32:27'),(6,'7485265652','Shubham','Patil','HDFC','HDFC123',54487251,8000,'tickets','196548266','2020-06-21 14:42:37');
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-21 22:11:13
