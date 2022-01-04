const getTabela = document.getElementById("tabela")
const getTabela2 = document.getElementById("tabela2")
async function getContent(){
    try {
        const response = await fetch("http://localhost:8080/emprestimo/buscar/1");
        const data = await response.json();
        console.log(data)
        getTabela.innerHTML = `Código do Empréstimo: `+`${data.id}` + `<br>` + ` Valor do empréstimo: ` + `${data.valor_emprestimo}`
        + `<br>` + ` Parcelas: ` + `${data.parcelas}`+ `<br>` + `Pagamento da Primeira Parcela:: ` + `${data.primeira_parcela}`+ `<br>`;

       /* const response2 = await fetch("http://localhost:8080/usuario/buscar/henrique@henrique");
        const data2 = await response2.json();
        console.log(data2)
        getTabela2.innerHTML = `Nome: `+`${data2.nome_usuario}` + `<br>` + ` E-mail: ` + `${data2.email}`
        + `<br>` + ` CPF: ` + `${data2.cpf}`+ `<br>` + ` RG: ` + `${data2.rg}`+ `<br>` + ` Renda:` + `${data2.renda}`
*/
        
    } catch (error) {
        console.error(error);
    }
    
}


    
  getContent();


    

