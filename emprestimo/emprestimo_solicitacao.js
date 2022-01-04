window.onload = () =>{
    const inputValor = document.getElementById("input_emprestimo_valor");
    const inputParcelas = document.getElementById("input_emprestimo_parcelas");
    const inputDataParcelas = document.getElementById("input_emprestimo_data_parcelas");
    const inputChaveEstrangeira = document.getElementById("input_emprestimo_chave_estrangeira");
    
    const btnSolicitar = document.getElementById("button_emprestimo_solicitar");


    const feedbackSolicitacao = document.getElementById("feedback_emprestimo_solicitacar");

    const endpointSolicitacao = "http://localhost:8080/emprestimo/solicitar"

    btnSolicitar.addEventListener("click", event => {
        event.preventDefault();

        const payLoadEmprestimo ={
            valor_emprestimo: inputValor.value,
            parcelas: inputParcelas.value,
            primeira_parcela: inputDataParcelas.value,
            id_usuario: inputChaveEstrangeira.value
        }

        if (payLoadEmprestimo) {
            fetch(endpointSolicitacao, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payLoadEmprestimo)
            }).then(
                success => {
                    feedbackSolicitacao.innerText = ` Empréstimo solicitado com sucesso!`;
                },
                error => {
                    console.log("Erro ao cadastrar aluno", error);
                    feedbackSolicitacao.innerText = `ERRO AO SOLICITAR EMPRÉSTIMO`;
                }
            );
        }


    })
}