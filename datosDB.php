<?php
$servername = "localhost";
$database = "checkin2021";
$username = "admin";
$password = "checkin2021";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
    mysqli_query($conn, "SET character_set_result=utf8");
// Check connection
if ($conn->connect_error) {
    die("Database error : ". $conn->connect_error);
}

?>