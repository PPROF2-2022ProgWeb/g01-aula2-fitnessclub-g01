<?php
        $Mail = $_POST["Mail"];
        $Contraseña = $_POST["Contraseña"];


// Incluimos los datos de conexión y las funciones:
include("datosDB.php");
$con = mysqli_connect($servername, $username, $password, $database) or die ("No se ha podido conectar al servidor de Base de datos");
if (!$con) {
    die("Conexión fallida: " . mysqli_connect_error());
}

$sql = "SELECT * FROM `persona`;";

$db = mysqli_select_db($con, $database) or die ( "Upps! no se ha podido conectar a la base de datos" );
$consultalogin = "SELECT (Email, Contraseña) from persona where (Email='$Email', Contraseña='$Contraseña')";
// Usamos esas variables:
if (mysqli_query ($con, $consultalogin)){
    echo "<h3> Se ha logueado correctamente.</h3>";
    } else {
    echo "<h3>Los datos de logueo no coinciden </h3>";
    echo "Error: " . $consultalogin . "<br>" . mysqli_error($con);
}
mysqli_close($con);

?>