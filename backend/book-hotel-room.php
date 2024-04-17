<?php
include 'connect.php';
$request = json_decode(file_get_contents('php://input'), true)['room_id'];

$db->query("UPDATE `rooms` SET `status` = '0' WHERE `id` = '$request'");

echo json_encode(array(
  "response" => 'Номер забронирован'
));