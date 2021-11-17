<?php
        $nombre= $_POST["nombre"];
        $apellido= $_POST["apellido"];
        $tipodocumento= $_POST["tipodocumento"];
        $dni=$_POST["dni"];
        $fechanacimiento=$_POST["fechanacimiento"];
        $email=$_POST["email"];
        $direccion=$_POST["direccion"];
        $password=$_POST["password"];
        print "<h1> Nombre: $nombre </p>";
        print "\n"
        print "<h1> Apellido: $apellido </p>";
        print "\n"
        print "<h1> Tipo de Documento: $tipodocumento </p>";
        print "\n"
        print "<h1> DNI: $dni  </p>";
        print "\n"
        print "<h1> Fecha de Nacimiento: $fechanacimiento </p>";
        print "\n"
        print "<h1> Email: $email </p>";
        print "\n"
        print "<h1> Direccion: $direccion </p>";
        print "\n"
        print "<h1> Password: $password </p>";
        print "\n"


// Incluimos los datos de conexión y las funciones:
include("datosDB.php");
$con = mysqli_connect($host,$usuario,$clave,$basededatos) or die ("No se ha podido conectar al servidor de Base de datos");
if (!$con) {
    die("Conexión fallida: " . mysqli_connect_error());
}



$db = mysqli_select_db($con, $basededatos) or die ( "Upps! no se ha podido conectar a la base de datos" );
$consulta = "INSERT INTO usuarios (Usuario, nombre, apellido, correo) VALUES ('$nomUsu', '$nombre', '$apellido', '$email')";

//echo $host,$usuario,$clave,$basededatos;
//echo $consulta;
// Usamos esas variables:
if (mysqli_query ($con, $consulta)){
    echo "<p>Registro agregado.</p>";
    } else {
    echo "<p>No se agregó nuevo registro</p>";
    echo "Error: " . $consulta . "<br>" . mysqli_error($con);
 }
 mysqli_close($conn);
?>