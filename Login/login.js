window.onload = () =>{
const login_usuario_username = document.getElementById("username")
const login_usuario_password = document.getElementById("password")

const feedbackLogin = document.getElementById("feedback_usuario_login");

const btnLogin = document.getElementById("button_usuario_login");

const endpointLogin = "http://localhost:8080/login"

    btnLogin.addEventListener("click", event => {
        event.preventDefault();

        const payLoginUsuario = {
        username:login_usuario_username,
        password:login_usuario_password
    }

    if (payloadLogin.login_usuario_username && payloadLogin.login_usuario_password){

        fetch(payLoginUsuario, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payLoginUsuario)
        }).then(
            succes => {
                feedbackLogin.innerText = `Login efetuado!`
            },
            error =>{
                feedbackLogin.innerText = `E-mail ou Senha incorretos!`
            }
        );
    }
});

  
};


