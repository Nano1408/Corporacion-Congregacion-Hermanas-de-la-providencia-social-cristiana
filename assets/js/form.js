//script de la API email js
const btn = document.getElementById('button-form');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando Espere...';

   const serviceID = 'default_service';
   const templateID = 'template_6hsujk9';

   emailjs.sendForm(serviceID, templateID, this).then(() => {
      btn.value = 'Enviar Mensaje';
          Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Gracias Por enviar tu mensaje',
          text:'Dios te bendiga',
          showConfirmButton:true,
          ConfirmButtonText: "Salir",
          ConfirmButtonColor:'#fff',
          footer:'<span class="color-alert-footer">Tu mensaje es importante para nosotros</span>',
          backdrop:'true',
          allowOutsideClick:'false',
          allowScapeKey:'false',
          allowEnterKey:'true',
          stopKeydownPropagation:'true',
          timerProgressBar:'<span class="color-alert-footer">true</span>',
          timer: 7000,
        })
    }, (err) => {
      btn.value = 'Enviar Mensaje';
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