<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="width-device-width, initial-scale-1.0">
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"></script> 
           <!-- FONTAVESOME-->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
       <!-- Css -->
    <link rel="stylesheet" type="text/css" media="all" href="CSS/registro.css">
    <!--Javascript-->
    <script type="text/javascript" src="JS/funcionesGrupo3.js"></script>
    <title> TURNOS </title>
</head>
<body>
<button type="button" class="btn btn-primary" onclick="dashboardRedirect()"> Volver </button>      

      <div id="mensaje"> </div>
<?php
        $Sedes = $_POST["Sedes"];
        $Profesor = $_POST["Profesor"];
        $Actividad = $_POST["Actividad"];
        $Fecha = $_POST["Fecha"];
        $Horario = $_POST["Horario"];


        print "<h1> TENES UN TURNO RESERVADO: </h1>";
        print "\n";        
        print "<h1> Sede: $Sedes </h1>";
        print "\n";
        print "<h1> Profesor: $Profesor </h1>";
        print "\n";
        print "<h1> Actividad: $Actividad </h1>";
        print "\n";
        print "<h1> Actividad: $Fecha </h1>";
        print "\n";
        print "<h1> Horario: $Horario  </h1>";
        print "\n";

// Incluimos los datos de conexión y las funciones:

    include("datosDB.php");
    $con = mysqli_connect($servername, $username, $password, $database) or die ("No se ha podido conectar al ser de Base de Datos");
    if(!$con){
        die("Conexion fallida: ". mysql_connect_error());
    }


$db = mysqli_select_db($con, $database) or die ( "Upps! no se ha podido conectar a la base de datos" );
$consulta = "INSERT INTO turnos (Sedes, Profesor, Actividad, Fecha, Horario) VALUES ('$Sedes', '$Profesor', '$Actividad','$Fecha', '$Horario')";
// Usamos esas variables:
if (mysqli_query ($con, $consulta)){
    echo "<h3>Se ha agregado el turno.</h3>";
    } else {
    echo "<h3>No se agregó el turno correctamente</h3>";
    echo "Error: " . $consulta . "<br>" . mysqli_error($con);
}
mysqli_close($con);


?>