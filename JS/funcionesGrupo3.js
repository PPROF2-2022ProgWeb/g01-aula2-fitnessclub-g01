function exito(){
  alert("Su registro ha sido enviado con Exito");
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


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})();
