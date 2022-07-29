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
      if(response.ok){
        this.reset()
        alert("Gracias por enviar tu mensaje, Dios te bendiga ")
      }
}