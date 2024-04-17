<?php
session_start();
include 'connect.php';
$hotel_id = json_decode(file_get_contents('php://input'), true)['id'];
$request = $db->query("SELECT `id`, `name` FROM `hotels` WHERE `imageId` = '$hotel_id'")->fetch_assoc();
$_SESSION["hotel_id"] = $request['id'];
$_SESSION["name_hotel"] = $request['name'];