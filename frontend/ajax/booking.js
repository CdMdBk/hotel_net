'use strict'

document.querySelector('.dialog__form').addEventListener('submit', function() {
  fetch('../../backend/book-hotel-room.php', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({room_id: roomId})
  }).then(response => {
    return response.json();
  }).then(data => {
    document.querySelector(`[data-room-id="${roomId}"]`).querySelector('.rooms__button').classList.replace('rooms__button_active', 'rooms__button_inactive');
    document.querySelector(`[data-room-id="${roomId}"]`).querySelector('.rooms__button').removeAttribute('onclick');
    document.querySelector(`[data-room-id="${roomId}"]`).querySelector('.rooms__button').textContent = 'Забронирован';

    alert(data.response);
  });
});