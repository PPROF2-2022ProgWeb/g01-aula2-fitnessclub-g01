<?php
function conectar(){
    $user="admin";
    $pass="checkin2021";
    $server="localhost";
    $basedatos="checkin";
    $con=mysql_connect($server,$user,$pass) or die("Error al intentar conectar a la base de datos".mysql_error());   
    mysql_select_db($db,$con);
    return $con; 
}
?>
