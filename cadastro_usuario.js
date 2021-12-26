/* 
    window.onload garante que o codigo sera executado so dps da pagina carregar
    sem ele o codigo iria tentar pegar os elementos html antes deles terem sido criados

    ** La no html eu coloquei a chamada do script dps de todo o html, 
    entao esse problema nao aconteceria kkk mas por segurança é bom sempre usar assim
*/
window.onload = () => {
    const inputNomeEmpresa = document.getElementById("input_empresa_nome");
    const inputNome = document.getElementById("input_usuario_nome");
    const inputEmail = document.getElementById("input_usuario_email");
    const inputRg = document.getElementById("input_usuario_rg");
    const inputCpf = document.getElementById("input_usuario_cpf");
    const inputSenha = document.getElementById("input_usuario_senha");

    const btnCadastrar = document.getElementById("button_usuario_cadastrar");

    // Onde ira mostrar mensagem de sucesso ou erro ao cadastrar
    const feedbackCadastro = document.getElementById("feedback_usuario_cadastro");

    const endpointCadastro = "http://localhost:8080/usuario/cadastrar";

    // Adiciona o que fazer ao executar o evento de click
    btnCadastrar.addEventListener("click", event => {
        event.preventDefault();

        const payloadUsuario = {
            nome_empresa: inputNomeEmpresa.value,
            usuarios:[{
                nome_usuario: inputNome.value,
                email: inputEmail.value,
                rg: inputRg.value,
                cpf: inputCpf.value,
                senha: inputSenha.value
            }]
            
        }

        if (payloadUsuario.nome_empresa && payloadUsuario.usuarios) {
            fetch(endpointCadastro, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payloadUsuario)
            }).then(
                success => {
                    feedbackCadastro.innerText = /*` ${payloadUsuario.nome} */ ` Cadastrado com sucesso!`;
                },
                error => {
                    console.log("Erro ao cadastrar aluno", error);
                    feedbackCadastro.innerText = `ERRO AO CADASTRAR` // ${payloadUsuario.nome}!`;
                }
            );
        }
    });
};
