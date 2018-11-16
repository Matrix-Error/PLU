function sendEmail(){

    //obter valores do formulario no html
    const name = document.querySelector("#txtName").value
    const message = document.querySelector("#txtMessage").value

    //inicializar o componente EmailJS
    emailjs.init("user_Zni2vc8JG9QRLWFsFRAJ5")

    //valores a alterar pelas variáveis do formulário
    const template_params = {
        "reply_to": "reply_to_value",
        "from_name": name,
        "to_name": "to_name_value",
        "message_html": message
     }
     
     const service_id = "default_service"
     const template_id = "template_x508AHEY"
     emailjs.send(service_id,template_id,template_params)


    console.log("Olá " + name)
}