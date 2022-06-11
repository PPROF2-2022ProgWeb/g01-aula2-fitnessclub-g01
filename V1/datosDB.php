<?php
$servername = "localhost";
$database = "checkin2021";
$username = "admin";
$password = "checkin2021";
// Create connection
$con = mysqli_connect($servername, $username, $password, $database);
    mysqli_query($con, "SET character_set_result=utf8");
// Check connection
if ($con->connect_error) {
    die("Database error : ". $con->connect_error);
}

?>