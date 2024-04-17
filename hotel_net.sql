-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jan 20, 2024 at 01:44 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel_net`
--

-- --------------------------------------------------------

--
-- Table structure for table `hotels`
--

CREATE TABLE `hotels` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `imageId` varchar(100) NOT NULL,
  `location_center` varchar(255) NOT NULL,
  `location_sea` varchar(255) NOT NULL,
  `attributes` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hotels`
--

INSERT INTO `hotels` (`id`, `name`, `imageId`, `location_center`, `location_sea`, `attributes`) VALUES
(1, 'Bird of paradise', 'bird-of-paradise', '4 км до центра', '100 метров до моря', 'Wi-Fi, Бассейн, Парковка, Кондиционер в номере, Оплата картой'),
(2, 'Golden lagoon', 'golden-lagoon', '2 км до центра', '50 метров до моря', 'Wi-Fi, Бассейн, Кондиционер в номере, Оплата картой'),
(3, 'New benchmark', 'new-benchmark', '6 км до центра', '200 метров до моря', 'Wi-Fi, Бассейн, Парковка, Кондиционер в номере, Оплата картой');

-- --------------------------------------------------------

--
-- Table structure for table `photos_rooms`
--

CREATE TABLE `photos_rooms` (
  `id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `photoId` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `photos_rooms`
--

INSERT INTO `photos_rooms` (`id`, `room_id`, `photoId`) VALUES
(1, 1, 'first-room-1.jpg'),
(2, 1, 'first-room-2.jpg'),
(3, 2, 'second-room-1.jpg'),
(4, 2, 'second-room-2.jpg'),
(5, 3, 'third-room-1.jpg'),
(6, 3, 'third-room-2.jpg'),
(7, 4, 'first-room-1.jpeg'),
(8, 4, 'first-room-2.jpg'),
(9, 5, 'second-room-1.jpg'),
(10, 5, 'second-room-2.jpg'),
(11, 6, 'third-room-1.jpg'),
(12, 6, 'third-room-2.jpg'),
(13, 7, 'fourth-room-1.jpg'),
(14, 7, 'fourth-room-2.jpg'),
(15, 8, 'first-room-1.jpg'),
(16, 8, 'first-room-2.jpg'),
(17, 9, 'second-room-1.jpg'),
(18, 9, 'second-room-2.jpg'),
(19, 6, 'third-room-3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `rating` int(11) NOT NULL,
  `username` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `hotel_id`, `comment`, `rating`, `username`) VALUES
(1, 1, 'Мне всё понравилось', 5, 'Валентина'),
(2, 1, 'Не всё прошло гладко, но семье понравилось', 4, 'Кирилл Ларин'),
(3, 1, 'Класс!!!!', 5, 'Матвей'),
(4, 1, 'Многое в отеле прибывает в ужасном качестве', 3, 'Пётр Морозов'),
(5, 1, 'Ну это базовый отель. Нам зашло', 5, 'Антон Антон'),
(6, 1, 'Нам понравилось', 5, 'Никита Ступин'),
(10, 2, 'Блин, такого классного отеля мы ещё не видели', 5, 'Гоша Знахарь'),
(11, 2, 'Ну под пиво пойдёт', 4, 'Игорь Бабонов'),
(12, 2, 'Когда-то мне сказали, что нет рая на земле. Они ошибались...', 5, 'Михаил'),
(13, 2, 'Достойно.', 5, 'Валентин Дмитриев'),
(14, 3, 'У нас столько было всего в холодильнике, что мы ни разу с друзьями не выходили из номера)', 5, 'Эдуард Моряков'),
(15, 3, 'Вид из окна шикаааарен. А вот пованивает знатно', 3, 'Виктория Павловна'),
(16, 3, 'Лучше уже не будет', 5, 'Анастасия Сия'),
(17, 3, 'Думаю тут и провести старость, если разбогатею', 5, 'Мирона Миронова'),
(18, 3, 'Персонал отменный, мне понравилось с ними', 5, 'Борис Святынин'),
(19, 1, 'Это лучшее, что я видел за последние пару дней. Лучше была только шаурма на вокзале', 2, 'Антоха Ненадёжный'),
(20, 3, 'Нашей семье понравилось))) Лайк!', 5, 'Мария Ландыш'),
(21, 3, 'И опять таки это неплохо, но не то, что ожидаешь от таких дорогих номеров', 3, 'Виталий Душный'),
(22, 3, 'ВЫ СЕРЬЁЗНООО??? Это не стоит того', 2, 'Кевин'),
(23, 3, 'Ужасно!', 2, 'Гриша');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `description` varchar(100) NOT NULL,
  `attributes` varchar(100) NOT NULL,
  `room_size` varchar(100) NOT NULL,
  `price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `hotel_id`, `status`, `description`, `attributes`, `room_size`, `price`) VALUES
(1, 1, 1, 'Люкс с двухспальной кроватью', 'Wi-Fi, Холодильник, Ванна, Телевизор', 'Площадь 19м2', 3000),
(2, 1, 0, 'Люкс с двумя односпальными кроватями', 'Wi-Fi, Ванна, Телевизор', 'Площадь 22м2', 5000),
(3, 1, 1, 'Бизнес класс двухместный', 'Wi-Fi, Холодильник, Ванна', 'Площадь 24м2', 6000),
(4, 2, 1, 'Бизнес класс одноместный', 'Wi-Fi, Холодильник, Ванна, Телевизор', 'Площадь 18м2', 3500),
(5, 2, 1, 'Люкс с двумя односпальными кроватями', 'Холодильник, Ванна, Телевизор', 'Площадь 17м2', 4000),
(6, 2, 1, 'Бизнес класс двухместный', 'Wi-Fi, Холодильник, Телевизор', 'Площадь 19м2', 7000),
(7, 2, 0, 'Люкс с двухспальной кроватью', 'Wi-Fi, Холодильник, Ванна, Телевизор', 'Площадь 20м2', 9000),
(8, 3, 1, 'Люкс с двумя односпальными кроватями', 'Wi-Fi, Холодильник, Ванна, Телевизор', 'Площадь 19м2', 5000),
(9, 3, 1, 'Бизнес класс двухместный', 'Wi-Fi, Холодильник', 'Площадь 20м2', 4000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `photos_rooms`
--
ALTER TABLE `photos_rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `photos_rooms`
--
ALTER TABLE `photos_rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
