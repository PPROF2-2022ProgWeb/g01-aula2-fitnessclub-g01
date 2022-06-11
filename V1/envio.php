<?php
        $Nombre = $_POST["Nombre"];
        $Apellido = $_POST["Apellido"];
        $CodigoTipoDocumento = $_POST["CodigoTipoDocumento"];
        $Documento = $_POST["Documento"];
        $FechaNacimiento = $_POST["FechaNacimiento"];
        $Email = $_POST["Email"];
        $Direccion = $_POST["Direccion"];
        $CodigoLocalidad = $_POST["CodigoLocalidad"];
        $CodigoProvincia = $_POST["CodigoProvincia"];
        $CodigoPais = $_POST["CodigoPais"];

        print "<h1> Nombre: $Nombre </h1>";
        print "\n"
        print "<h1> Apellido: $Apellido </h1>";
        print "\n"
        print "<h1> Tipo de Documento: $CodigoTipoDocumento </h1>";
        print "\n"
        print "<h1> DNI: $Documento </h1>";
        print "\n"
        print "<h1> Fecha de Nacimiento: $FechaNacimiento </h1>";
        print "\n"
        print "<h1> Email: $Email </h1>";
        print "\n"
        print "<h1> Direccion: $Direccion </h1>";
        print "\n"
        print "<h1> Localidad: $CodigoLocalidad </h1>";
        print "\n"
        print "<h1> Provincia: $CodigoProvincia </h1>";
        print "\n"
        print "<h1> Pais: $CodigoPais </h1>";
        print "\n"

// Incluimos los datos de conexión y las funciones:
include("datosDB.php");
$con = mysqli_connect($servername, $username, $password, $database) or die ("No se ha podido conectar al servidor de Base de datos");
if (!$con) {
    die("Conexión fallida: " . mysqli_connect_error());
}


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