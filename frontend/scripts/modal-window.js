'use strict'

const dialog = document.querySelector('dialog');
let roomId = '';

const inputNumberDays = document.querySelector('#number-days');
const reduceDays = document.querySelector('#reduce-days');
const increaseDays = document.querySelector('#increase-days');
const inputCheckbox = document.querySelector('[type="checkbox"]');
const inputTotalCost = document.querySelector('#total-cost');

let pricePerDay = 0;
let numberOfDays;
let discount = .9;

reduceDays.addEventListener('click', changeNumberDays);
increaseDays.addEventListener('click', changeNumberDays);
inputCheckbox.addEventListener('input', calculatingTotalCost);

function openDialog() {
  pricePerDay = event.target.parentElement.querySelector('[data-price]').getAttribute('data-price');
  roomId = event.target.parentElement.parentElement.getAttribute('data-room-id');
  numberOfDays = inputNumberDays.value = 1;
  inputCheckbox.checked = false;
  calculatingTotalCost();

  dialog.showModal();
}

function changeNumberDays() {
  if (this.innerHTML === '+' && inputNumberDays.value < 30) {
    numberOfDays = inputNumberDays.value = ++inputNumberDays.value;
  } else if (this.innerHTML === '-' && inputNumberDays.value > 1) {
    numberOfDays = inputNumberDays.value = --inputNumberDays.value;
  }

  calculatingTotalCost();
}

function calculatingTotalCost() {
  if (inputCheckbox.checked) {
    inputTotalCost.textContent = numberOfDays * pricePerDay * discount;
  } else {
    inputTotalCost.textContent = numberOfDays * pricePerDay;
  }
}