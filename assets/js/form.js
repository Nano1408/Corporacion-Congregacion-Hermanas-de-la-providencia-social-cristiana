//script de la API email js
const btn = document.getElementById('button-form');

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando Espere...';

   const serviceID = 'default_service';
   const templateID = 'template_6hsujk9';

   emailjs.sendForm(serviceID, templateID, this).then(() => {
   //esta linea se ejecuta despues de enviar el form para despues limpiar el form y aparecer la alerta
   document.getElementById("form").reset();
      btn.value = 'Send Email';
         //sweetAlert
          Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Gracias Por enviar tu mensaje',
          text:'"Esten siempre alegres, oren sin cersar, den gracias a Dios en toda situación, porque esta es su voluntad para ustedes en cristo jesus"',
          showConfirmButton:true,
          footer:'<span class="color-alert-footer">Tu mensaje es importante para nosotros</span>',
          backdrop:'true',
          allowOutsideClick:'false',
          allowScapeKey:'false',
          allowEnterKey:'true',
          stopKeydownPropagation:'true',
          timerProgressBar:'<span class="color-alert-footer">true</span>',
          timer: 7000,
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