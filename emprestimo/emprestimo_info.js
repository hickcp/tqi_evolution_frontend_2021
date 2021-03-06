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
    
};

const formatarData = (data) => {
    const dtObj = new Date(data);

    return dtObj.toLocaleDateString();
}
listarEmprestimos();