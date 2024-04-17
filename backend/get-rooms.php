<?php
session_start();
include 'connect.php';
$hotel_id = $_SESSION["hotel_id"];
$response = array();

//query to the hotels table

$array_hotel_data = $db->query("SELECT `name`, `imageId` FROM `hotels` WHERE `id` = '$hotel_id'")->fetch_assoc();
$response["nameHotel"] = $array_hotel_data['name'];
$response["imageIdHotel"] = $array_hotel_data['imageId'];

//query to the rooms table

$array_rooms = $db->query("SELECT * FROM `rooms` WHERE `hotel_id` = '$hotel_id'");
$numberRooms = 0;

while ($row = $array_rooms->fetch_assoc()) {
  $response["rooms"][$numberRooms] = array(
    "room_id" => $row['id'],
    "descriptionRoom" => $row['description'],
    "attributesRoom" => $row['attributes'],
    "roomSize" => $row['room_size'],
    "price" => (int)$row['price'],
    "status" => (int)$row['status']
  );

  //query to the photos_rooms table

  $room_id = $row['id'];
  $array_photos = $db->query("SELECT `photoId` FROM `photos_rooms` WHERE `room_id` = '$room_id'");

  while ($rowPhotos = $array_photos->fetch_assoc()) {
    $response["rooms"][$numberRooms]["photos"][] = $rowPhotos['photoId'];
  }

  //zeroing out

  $numberRooms++;
}
$response["numberRooms"] = $numberRooms;

//query to the reviews table

$array_reviews = $db->query("SELECT `comment`, `rating`, `username` FROM `reviews` WHERE `hotel_id` = '$hotel_id'");

while ($row = $array_reviews->fetch_assoc()) {
  $response["reviews"][] = [$row['comment'], $row['rating'], $row['username']];
}

//response

echo json_encode($response);