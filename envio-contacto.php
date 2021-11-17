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
    <title> FORMULARIO </title>
</head>
<body>
     <h4> <a href="registro.html"> Regresar </a> </h4>
     <input type="button" value="volver" onclick="pVolver();"><br>
     <input type="button" value="Submit" onclick="paginaRedirct();"></br>            

      <div id="mensaje"> </div>
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


        include("datosDB.php");
        $con = mysqli_connect($host, $usuario, $clave, $schema) or die ("No se ha podido conectar al ser de Base de Datos");
        if(!$con){
            die("Conexion fallida: ". mysql_connect_error());
        }
        ?>

       

     <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
     <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>

    </body>   
 </html>               
