fetch('/database/cadastros.json') // Substitua pelo caminho correto do arquivo JSON
    .then(response => response.json())
    .then(data => {
        const ranking = data.map(user => user.cadastro)
            .sort((a, b) => b.experiencia - a.experiencia);

        const tableBody = document.getElementById('ranking').getElementsByTagName('tbody')[0];

        ranking.forEach(user => {
            let row = tableBody.insertRow();
            row.insertCell(0).innerText = user.nome;
            row.insertCell(1).innerText = user.nivel;
            row.insertCell(2).innerText = user.experiencia;
        });
    });