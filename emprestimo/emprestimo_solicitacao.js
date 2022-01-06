window.onload = () =>{
    const inputValor = document.getElementById("input_emprestimo_valor");
    const inputParcelas = document.getElementById("input_emprestimo_parcelas");
    const inputDataParcelas = document.getElementById("input_emprestimo_data_parcelas");

    
    const btnSolicitar = document.getElementById("button_emprestimo_solicitar");


    const feedbackSolicitacao = document.getElementById("feedback_emprestimo_solicitacar");

    const token = window.localStorage.getItem("token");
    const tokenObj = parseJwt(token);
    const email = tokenObj.sub;

    const endpointSolicitacao = "http://localhost:8080/emprestimo/solicitar";

    btnSolicitar.addEventListener("click", event => {
        event.preventDefault();

        const payLoadEmprestimo ={
            valorEmprestimo: inputValor.value,
            parcelas: inputParcelas.value,
            primeiraParcela: inputDataParcelas.value,
            
        }

        if (payLoadEmprestimo) {
            fetch(endpointSolicitacao, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization":token },
                body: JSON.stringify(payLoadEmprestimo)
            }).then(
                success => {
                    feedbackSolicitacao.innerText = ` Enviado!`;
                },
                error => {
                    console.log("Erro ao cadastrar aluno", error);
                    feedbackSolicitacao.innerText = `ERRO AO SOLICITAR EMPRÉSTIMO`;
                }
            );
        }


    })
}

const parseJwt = token => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};