const listarEmprestimos = () => {
    const token = window.localStorage.getItem("token");

    fetch("http://localhost:8080/emprestimo/buscar", {
        method: "GET",
        headers: {"Authorization": token}
    })
    .then(res => {
        if (res.status === 403) {
            window.location = '/';
        }

        if (!res.ok) {
            throw new Error('Erro ao solicitar emprestimo ' + res.statusText);
        }

        return res.json();
    }) 
    .then(res => {
        res.forEach(emprestimo => {
            addEmprestimoToTable("tb_emprestimos", emprestimo);
        });
    })
    .catch(err => {
        console.log('erro:', err);
    });
}

const addEmprestimoToTable = (tableId, emprestimo) => {
    const tableRef = document.getElementById(tableId);
    const newRow = tableRef.insertRow(-1);
    
    
    newRow.insertCell(0).appendChild(document.createTextNode(emprestimo.id));
    newRow.insertCell(1).appendChild(document.createTextNode(emprestimo.valorEmprestimo));
    newRow.insertCell(2).appendChild(document.createTextNode(emprestimo.parcelas));
    newRow.insertCell(3).appendChild(
        document.createTextNode(formatarData(emprestimo.primeiraParcela))
    );
};

const formatarData = (data) => {
    const dtObj = new Date(data);

    return dtObj.toLocaleDateString();
}



window.onload = () =>{
    const token2 = window.localStorage.getItem("token");
    const tokenObj = parseJwt(token2);
    const email = tokenObj.sub;

    fetch("http://localhost:8080/usuario/buscar/" + email, {
        method: "GET",
        headers: {"Authorization": token2}
    })
    .then(res => res.json())
    .then(res => {
        
        document.getElementById("usuario_email").innerText = res.email;   
        document.getElementById("usuario_renda").innerText = res.renda;
    });
}


const parseJwt = token2 => {
    var base64Url = token2.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

listarEmprestimos();
    
    