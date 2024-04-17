'use strict'

let arrayHotelsCards = [];
let arrayRoomsCards = [];
let arrayImagesRooms = [];

function loadBlocksHotels(arrayHotels) {
  arrayHotelsCards = [];
  for (let i = 0; i < arrayHotels.numberHotels; i++) {
    arrayHotelsCards[i] = document.createElement('div');
    arrayHotelsCards[i].classList.add('hotels__card');
    arrayHotelsCards[i].innerHTML = `
      <div class="hotels__container">
        <img class="hotels__image"
             src="images/hotels/${arrayHotels.hotels[i].imageId}.png"
             alt="hotel ${arrayHotels.hotels.nameHotel}">
      </div>

      <div class="hotels__container">
        <h2 class="hotels__title">${arrayHotels.hotels[i].nameHotel}</h2>

        <div class="hotels__box">
          <p class="hotels__rating ${getRatingStyle(Math.round(arrayHotels.hotels[i].hotelRating * 100) / 100)}">${Math.round(arrayHotels.hotels[i].hotelRating * 100) / 100}</p>

          <p class="hotels_font_bold">${arrayHotels.hotels[i].numberReviews} отзывов</p>
        </div>

        <div class="hotels__box">
          <img class="hotels__svg"
               src="images/hotels/navigator.svg"
               alt="navigator">

          <p class="hotels_font_regular">${arrayHotels.hotels[i].location[0]}<br>${arrayHotels.hotels[i].location[1]}</p>
        </div>

        <p class="hotels_font_regular">${arrayHotels.hotels[i].hotelAttributes}</p>
      </div>

      <div class="hotels__container">
        <p class="hotels_font_bold">от ${arrayHotels.hotels[i].minimumPrice} ₽</p>

        <p class="hotels_font_regular">Цена за сутки</p>

        <p class="hotels_font_regular">Детям 10% скидка</p>

        <button id="${arrayHotels.hotels[i].imageId}"
                class="hotels__button"
                type="button">Перейти -></button>
      </div>
    `;

    document.querySelector('.hotels').append(arrayHotelsCards[i]);
  }

  document.querySelectorAll('.hotels__button').forEach(button => {
    button.addEventListener('click', goToHotel);
  });
}

function goToHotel() {
  fetch('../backend/identify-hotel.php', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({id: this.getAttribute('id')})
  }).then(() => {
    window.location = 'pages/hotel.php';
  });
}

function loadBlocksRooms(arrayRooms) {
  arrayRoomsCards = [];
  arrayImagesRooms = [];

  document.querySelector('.header__title').textContent = arrayRooms.nameHotel;
  document.querySelector('.header').style = `background: url('../images/hotels/${arrayRooms.imageIdHotel}.png') no-repeat center / cover, rgba(0, 168, 221, .1)`;
  for (let i = 0; i < arrayRooms.numberRooms; i++) {
    arrayRoomsCards[i] = document.createElement('div');
    arrayRoomsCards[i].classList.add('rooms__card');
    arrayRoomsCards[i].setAttribute('data-room-id', arrayRooms.rooms[i].room_id);

    arrayRoomsCards[i].innerHTML = `
      <div class="rooms__container">
        <img class="rooms__image"
             src="../images/rooms/${replaceImageId(arrayRooms.imageIdHotel)}/${arrayRooms.rooms[i].photos[0]}"
             alt="room photo">

        <div id="room-${i}"
             class="rooms__images-box"></div>
      </div>

      <div class="rooms__container">
        <h2 class="rooms__title">${arrayRooms.rooms[i].descriptionRoom}</h2>

        <p class="rooms_font_regular">${arrayRooms.rooms[i].attributesRoom}</p>

        <p class="rooms_font_regular">${arrayRooms.rooms[i].roomSize}</p>

        <p class="rooms_font_regular"><span class="rooms_font_bold" data-price="${arrayRooms.rooms[i].price}">${arrayRooms.rooms[i].price} ₽</span> за сутки</p>
        
        ${checkStatus(arrayRooms.rooms[i].status)}
      </div>
    `;
    document.querySelector('.rooms').append(arrayRoomsCards[i]);

    for (let j = 1; j < arrayRooms.rooms[i].photos.length; j++) {
      document.querySelector(`#room-${i}`).innerHTML += `
        <img src="../images/rooms/${replaceImageId(arrayRooms.imageIdHotel)}/${arrayRooms.rooms[i].photos[j]}"
             alt="room photo">
      `;
    }
  }

  loadBlockReviews(arrayRooms.reviews);
}

function checkStatus(status) {
  if (status) {
    return `<button class="rooms__button rooms__button_active" type="button" onclick="openDialog()">Забронировать</button>`;
  } else {
    return `<button class="rooms__button rooms__button_inactive" type="button">Забронирован</button>`;
  }
}

function replaceImageId(string) {
  return string.replace(/-/gm, '_');
}

function loadBlockReviews(arrayReviews) {
  arrayReviews.forEach(reviews => {
    document.querySelector('.reviews__container').innerHTML += `
    <div class="reviews__card">
      <div class="reviews__rating ${getRatingStyle(reviews[1])}">${reviews[1]}</div>
      <h3 class="reviews__name">${reviews[2]}</h3>
      <p class="reviews__comment">${reviews[0]}</p>
    </div> 
  `;
  });

  if (arrayReviews.length > 4) {
    document.querySelector('.reviews__caption').textContent = `${arrayReviews.length} отзывов`;
  } else {
    document.querySelector('.reviews__caption').textContent = `${arrayReviews.length} отзыва`;
  }

  document.querySelector('.reviews__container').style.width = `${arrayReviews.length / 3 * 1100}px`;
}

function getRatingStyle(rating) {
  if (rating > 4) {
    return 'reviews__rating_bg_great';
  } else if (rating > 3) {
    return 'reviews__rating_bg_good';
  } else if (rating > 2) {
    return 'reviews__rating_bg_satisfactory';
  } else {
    return 'reviews__rating_bg_terribly';
  }
}

export {loadBlocksHotels, loadBlocksRooms};