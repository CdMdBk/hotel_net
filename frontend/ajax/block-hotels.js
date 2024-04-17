'use strict'

import {loadBlocksHotels} from './functions.js';

fetch(`../backend/get-hotels.php`)
  .then(response => {
  return response.json();
}).then(arrayHotels => {
  loadBlocksHotels(arrayHotels);
});

