<?php
        $Sedes = $_POST["Sedes"];
        $Profesor = $_POST["Profesor"];
        $Actividad = $_POST["Actividad"];
        $Horario = $_POST["Horario"];

// Incluimos los datos de conexión y las funciones:

    include("datosDB.php");
    $con = mysqli_connect($servername, $username, $password, $database) or die ("No se ha podido conectar al ser de Base de Datos");
    if(!$con){
        die("Conexion fallida: ". mysql_connect_error());
    }





$db = mysqli_select_db($con, $database) or die ( "Upps! no se ha podido conectar a la base de datos" );
$consulta = "INSERT INTO turnos (Sedes, Profesor, Actividad, Horario) VALUES ('$Sedes', '$Profesor', '$Actividad', '$Horario')";
// Usamos esas variables:
if (mysqli_query ($con, $consulta)){
    echo "<h3>Se ha agregado el turno.</h3>";
    } else {
    echo "<h3>No se agregó el turno correctamente</h3>";
    echo "Error: " . $consulta . "<br>" . mysqli_error($con);
}
mysqli_close($con);


?>