<?php
$servername = "files.000webhost.com";
$database = "id17993029_checkin2021";
$username = "id17993029_admin";
$password = "IV(24>sPLZ=w?MX_";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
    mysqli_query($conn, "SET character_set_result=utf8");
// Check connection
if ($conn->connect_error) {
    die("Database error : ". $conn->connect_error);
}

?>