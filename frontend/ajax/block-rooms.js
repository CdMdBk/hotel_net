'use strict'

import {loadBlocksRooms} from "./functions.js";

fetch('../../backend/get-rooms.php')
  .then(response => {
    return response.json();
  }).then(arrayRooms => {
  loadBlocksRooms(arrayRooms);
});