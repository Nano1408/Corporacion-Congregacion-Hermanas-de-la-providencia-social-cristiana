const $form = document.querySelector(".form-hermanas");
$form.addEventListener("submit", handlesubmit);

async function handlesubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            "accept": "application/json"
        } 
    })
    // se ejecuta despues de aberse enviado el formulario
      if(response.ok){
        this.reset()
        // SweetAlert estructura
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Gracias Por enviar tu mensaje',
          text:'Dios te bendiga',
          showConfirmButton: false,
          ConfirmButtonColor:'#fff',
          footer:'<span class="color-alert-footer">Tu mensaje es importante para nosotros</span>',
          backdrop:'true',
          allowOutsideClick:'true',
          allowScapeKey:'false',
          allowEnterKey:'true',
          stopKeydownPropagation:'true',
          timerProgressBar:'<span class="color-alert-footer">true</span>',
          timer: 7000,
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Valida tu conexion a internet!',
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
}