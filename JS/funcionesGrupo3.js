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
/*largo de carateres
    var fields = [
        "checkout_billing_address_first_name",
        "checkout_billing_address_last_name",
        "checkout_billing_address_company",
        "checkout_billing_address_address1",
        "checkout_billing_address_address2",
        "checkout_billing_address_city",
        "checkout_billing_address_zip",
        "checkout_billing_address_phone"];
      for (i = 0; i < fields.length; i++) {
         document.getElementById(fields[i]).maxLength = 35;
      }*/