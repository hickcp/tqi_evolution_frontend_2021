/* 
    window.onload garante que o codigo sera executado so dps da pagina carregar
    sem ele o codigo iria tentar pegar os elementos html antes deles terem sido criados

    ** La no html eu coloquei a chamada do script dps de todo o html, 
    entao esse problema nao aconteceria kkk mas por segurança é bom sempre usar assim
    
*/
    const getTabela = document.getElementById("tabela")
async function getContent(){
    try {
        const response = await fetch("http://localhost:8080/usuario/buscar/henrique@henrique");
        const data = await response.json();
        console.log(data)
        getTabela.innerHTML = `Nome: `+`${data.nome_usuario}` + `<br>` + ` E-mail: ` + `${data.email}`
        + `<br>` + ` CPF: ` + `${data.cpf}`+ `<br>` + ` RG: ` + `${data.rg}`+ `<br>` + ` Renda:` + `${data.renda}`
    } catch (error) {
        console.error(error);
    }
    
}
    
  getContent();




 

    
    
    

        

       