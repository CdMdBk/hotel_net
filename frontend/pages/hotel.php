<?php

session_start();

if (!$_SESSION["hotel_id"]) {
  echo '<p>Вы не выбрали отель, просим вернуться <a href="../index.html">на стартовую страницу сервиса</a></p><br>';
  exit();
}

$name_hotel = $_SESSION["name_hotel"];
?>

<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible"
        content="ie=edge">

  <link rel="stylesheet" href="../styles/fonts.css">
  <link rel="stylesheet" href="../styles/base-styles.css">
  <link rel="stylesheet" href="../styles/header.css">
  <link rel="stylesheet" href="../styles/hotel/rooms.css">
  <link rel="stylesheet" href="../styles/hotel/booking.css">
  <link rel="stylesheet" href="../styles/hotel/reviews.css">
  <link rel="stylesheet" href="../styles/footer.css">

  <link rel="favicon icon" href="../images/favicon.svg">
  <title><?=$name_hotel?></title>
</head>
<body class="body">
  <header class="header"
          style="background: url('../images/hotels/bird-of-paradise.png') no-repeat center / cover, rgba(0, 168, 221, .1)">
    <nav class="nav">
      <div class="logo">
        <img src="../images/main/logo.svg"
             alt="logo">
      </div>

      <ul class="nav__list">
        <li class="nav__li">
          <a href="#"
             class="nav__link">О нас</a>
        </li>

        <li class="nav__li">
          <a href="../index.html"
             class="nav__link nav__link_active">К отелям</a>
        </li>

        <li class="nav__li">
          <a href="#"
             class="nav__link">Контакты</a>
        </li>

        <li class="nav__li nav__link">+7 (924) 789-42-56</li>
      </ul>
    </nav>

    <h1 class="header__title header__title_center">Название отеля</h1>
  </header>

  <main class="main">
    <section class="rooms"></section>

    <section class="reviews">
      <h2 class="reviews__caption">Отзывов</h2>

      <div class="reviews__slider">
        <img src="../images/rooms/arrow-left.svg"
             alt="arrow-left">

        <div class="reviews__window">
          <div class="reviews__container"></div>
        </div>

        <img src="../images/rooms/arrow-right.svg"
             alt="arrow-right">
      </div>
    </section>
  </main>

  <footer class="footer">
    <ul class="footer__list">
      <li class="footer__li">
        <a href="#"
           class="footer__text">О нас</a>
      </li>

      <li class="footer__li">
        <a href="#"
           class="footer__text">Отели</a>
      </li>

      <li class="footer__li">
        <a href="#"
           class="footer__text">Контакты</a>
      </li>

      <li class="footer__li footer__text">+7 (924) 789-42-56</li>
    </ul>

    <ul class="footer__list">
      <li class="footer__li">
        <a href="#"
           class="footer__text">Правила рекомендаций</a>
      </li>

      <li class="footer__li">
        <a href="#"
           class="footer__text">Личный кабинет</a>
      </li>

      <li class="footer__li">
        <a href="#"
           class="footer__text">Журнал для отельеров</a>
      </li>

      <li class="footer__li">
        <a href="#"
           class="footer__text">Участие в исследованиях</a>
      </li>
    </ul>

    <ul class="footer__list">
      <li class="footer__li">
        <a href="#"
           class="footer__text">Политика конфиденциальности</a>
      </li>

      <li class="footer__li">
        <a href="#"
           class="footer__text">Официальное уведомление</a>
      </li>

      <li class="footer__li">
        <a href="#"
           class="footer__text">Условия использования</a>
      </li>

      <li class="footer__li">
        <a href="#"
           class="footer__text">Отказ от авторских прав</a>
      </li>
    </ul>

    <ul class="footer__list">
      <li class="footer__li">
        <a href="#"
           class="footer__text">hotelnet@mail.ru</a>
      </li>

      <li class="footer__li footer__text">Февральская улица, 47, Подольск, Московская область, Россия</li>

      <li class="footer__li">
        <a href="#">
          <img class="footer__social-icon"
               src="../images/footer/vk.svg"
               alt="vk">
        </a>
      </li>

      <li class="footer__li">
        <a href="#">
          <img class="footer__social-icon"
               src="../images/footer/telegram.svg"
               alt="telegram">
        </a>
      </li>
    </ul>
  </footer>

  <dialog class="dialog">
    <div class="dialog__container">
      <form class="dialog__form"
            method="dialog">
        <fieldset class="dialog__fieldset">
          <legend class="dialog__caption">Укажите количество дней для бронирования</legend>

          <span id="reduce-days">-</span>

          <input id="number-days"
                 class="dialog__input"
                 type="text"
                 pattern="\d+"
                 required
                 value="1">

          <span id="increase-days">+</span>
        </fieldset>

        <fieldset class="dialog__fieldset">
          <input type="checkbox"
                 name="child">

          <p class="dialog__text">Вы будете с детьми?</p>
        </fieldset>

        <fieldset class="dialog__fieldset">
          <p class="dialog__text">Итоговая сумма: </p>

          <p id="total-cost"
             class="dialog__total-cost"></p>
        </fieldset>

        <button id="dialog-submit"
                class="dialog__submit"
                type="submit">Забронировать</button>
      </form>
    </div>
  </dialog>

  <script src="../scripts/scroll.js"></script>
  <script src="../ajax/block-rooms.js"
          type="module"></script>
  <script src="../scripts/modal-window.js"></script>
  <script src="../ajax/booking.js"></script>
  <script src="../scripts/slider.js"></script>
</body>
</html>