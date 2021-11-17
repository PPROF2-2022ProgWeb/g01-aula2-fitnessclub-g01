<?php
$host="localhost:3307";
$usuario="root";
$clave="checkin2021";
$schema="checkin";

$conn = new mysql($host, $usuario, $clave, $schema);
     mysqli_query($conn , "SET character_set_result=utf8");
     if($conn->connect_error){
         die("Database Error : " . $conn->connect_error);
     }
?>