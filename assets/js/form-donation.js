//script de la API email js
const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando Datos...';

   const serviceID = 'default_service';
   const templateID = 'template_a7q2a7m';

   emailjs.sendForm(serviceID, templateID, this).then(() => {
   //esta linea se ejecuta despues de enviar el form para despues limpiar el form y aparecer la alerta
   document.getElementById("form").reset();
      btn.value = 'Send Email';
         //sweetAlert
         Swal.fire({
          icon: 'success',
          title: 'Muchas gracias por tu apoyo',
          footer:'<span class="color-alert-footer">Con tu ayuda, contribuimos con la continuidad de los proyectos de vida de nuestros niños y jonvenes y la tranquilidad de sus familias</span>',
          timerProgressBar:'true',
          timer: 7000,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
    }, (_err) => {
      btn.value = 'Send Email';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al enviar tu mensaje, vuelve a intentar!',
        showConfirmButton:true,
        ConfirmButtonText: "Salir",
        // footer: '<a href="">Error al enviar tu mensaje</a>'
      });
    });
});