window.onload = () => {
    const token = window.localStorage.getItem("token");
    const tokenObj = parseJwt(token);
    const email = tokenObj.sub;

    fetch("http://localhost:8080/usuario/buscar/" + email, {
        method: "GET",
        headers: {"Authorization": token}
    })
    .then(res => res.json())
    .then(res => {
        document.getElementById("usuario_id").innerText = res.id;
        document.getElementById("usuario_email").innerText = res.email;
        document.getElementById("usuario_cpf").innerText = res.cpf;
        document.getElementById("usuario_endereco").innerText = res.enderecoCompleto;
        document.getElementById("usuario_renda").innerText = res.renda;
    });
}


const parseJwt = token => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

    
    
    

        

       