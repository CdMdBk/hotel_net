<?php
include 'connect.php';
$response = array();

//query to the hotels table

$array_hotels = $db->query("SELECT * FROM `hotels`");
$numberHotel = 0;
$numberReviews = 0;
$sumRatings = 0;

while ($row = $array_hotels->fetch_assoc()) {
  $hotel_id = $row['id'];

  $response["hotels"][$numberHotel] = array(
    "id" => $row['id'],
    "nameHotel" => $row['name'],
    "imageId" => $row['imageId'],
    "location" => array($row['location_center'], $row['location_sea']),
    "hotelAttributes" => $row['attributes']
  );

  //query to the rooms table

  $minimumPrice = 9999999999;
  $array_rooms = $db->query("SELECT `price` FROM `rooms` WHERE `hotel_id` = '$hotel_id'");

  while ($rowRoomPrice = $array_rooms->fetch_assoc()) {
    if ($minimumPrice > $rowRoomPrice['price']) $minimumPrice = $rowRoomPrice['price'];
  }
  $response["hotels"][$numberHotel]["minimumPrice"] = $minimumPrice;

  //query to the reviews table

  $array_reviews = $db->query("SELECT `rating` FROM `reviews` WHERE `hotel_id` = '$hotel_id'");

  while ($rowReviews = $array_reviews->fetch_assoc()) {
    $sumRatings += $rowReviews['rating'];
    $response["hotels"][$numberHotel]["numberReviews"] = ++$numberReviews;
    $response["hotels"][$numberHotel]["hotelRating"] = $sumRatings / $numberReviews;
  }

  //zeroing out

  $numberHotel++;
  $numberReviews = 0;
  $sumRatings = 0;
}
$response["numberHotels"] = $numberHotel;

//response

echo json_encode($response);