window.onload = () =>{
const login_usuario_username = document.getElementById("username")
const login_usuario_password = document.getElementById("password")

const btnLogin = document.getElementById("button_usuario_login");

const endpointLogin = "http://localhost:8080/login"

btnLogin.addEventListener("click", event => {
    const payLoginUsuario = {
        username:login_usuario_username,
        password:login_usuario_password
    }
});

fetch(payLoginUsuario, {
    headers: {
    },
    referrer: "http://localhost:8080/login",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: `username=login_usuario_username&password=login_usuario_password`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
};
