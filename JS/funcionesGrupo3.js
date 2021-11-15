function exito(){
    alert("Su registro ha sido exitoso");
    }

function ingresa(){
        var delay = 1000;
        setTimeout(function(){
         location.href = "login.html";
        },delay);
        
       }


  
function paginaRedirect(){
    var delay = 1000; 
    
    document.getElementById("mensaje").innerHTML = "Espere, en breve será redirigido a la pagina de inicio.";
    
    setTimeout(function(){
     window.location = "/index.html";
    },delay);

    }