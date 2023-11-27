document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;

    if (senha === confirmarSenha) {
        // As senhas são iguais, você pode prosseguir com a lógica de cadastro
        alert("Cadastro realizado com sucesso!");
    } else {
        // As senhas não são iguais, alerta o usuário
        alert("As senhas não coincidem. Por favor, tente novamente.");
    }
});

// -----------------------------------------------------------------------------------------------
// cadastro.js

document.addEventListener("DOMContentLoaded", function () {
    fetch('/path/to/cadastros.json')
        .then(response => response.json())
        .then(data => {
            const cadastrosOrdenados = data.cadastros.sort((a, b) => b.ranking - a.ranking || b.xp - a.xp);

       
            exibirCadastros(cadastrosOrdenados);
        })
        .catch(error => console.error('Erro ao carregar dados:', error));
});

function exibirCadastros(cadastros) {
 
    const cadastroContainer = document.querySelector('.cadastro-container');
    cadastroContainer.innerHTML = '';

    cadastros.forEach(cadastro => {
        const cadastroDiv = document.createElement('div');
        cadastroDiv.classList.add('cadastro');

       
        cadastroDiv.innerHTML = `
            <h3>${cadastro.nome}</h3>
            <p>Ranking: ${cadastro.ranking}</p>
            <p>XP: ${cadastro.xp}</p>
            <!-- Adicione mais informações conforme necessário -->
        `;

        cadastroContainer.appendChild(cadastroDiv);
    });
}
