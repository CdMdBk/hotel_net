'use strict'

const arrayLeft = document.querySelector('[alt="arrow-left"]');
const arrayRight = document.querySelector('[alt="arrow-right"]');

const sliderContainer = document.querySelector('.reviews__container');
let count = 0;
let numberCards;

arrayLeft.addEventListener('click', flipCard);
arrayRight.addEventListener('click', flipCard);

function flipCard(action) {
  numberCards = Math.round(sliderContainer.clientWidth / 1100 * 3);

  switch (event.target.getAttribute('alt')) {
    case 'arrow-left':
      if (count > 0) {
        sliderContainer.style.transform = `translate(${--count * -(1100 / 3)}px, 0)`;
      }
      break;
    case 'arrow-right':
      if (count < numberCards - 3) {
        sliderContainer.style.transform = `translate(${++count * -(1100 / 3)}px, 0)`;
      }
  }
}