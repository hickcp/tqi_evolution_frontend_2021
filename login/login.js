window.onload = () => {
    const inputEmail = document.getElementById("input_usuario_email");
    const inputSenha = document.getElementById("input_usuario_senha");

    const btnLogin = document.getElementById("button_usuario_login");

    const feedbackLogin = document.getElementById("feedback_login");

    const endpointLogin = "http://localhost:8080/login";

    btnLogin.addEventListener("click", event => {
        event.preventDefault();

        const payloadLogin = {
            email: inputEmail.value,
            senha: inputSenha.value,
        }

        if (payloadLogin.email && payloadLogin.senha) {
            fetch(endpointLogin, {
                method: "POST",
                body: JSON.stringify(payloadLogin)
            })
            .then(res => res.json())
            .then(res => {
                window.localStorage.setItem("token", res.token);

                window.location = "homepage.html";
            });
        } else {
            feedbackLogin.innerText = "Preencha todos os campos!"
        }
    });
};