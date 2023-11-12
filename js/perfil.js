document.addEventListener('DOMContentLoaded', function() {
    fetch('/database/cadastros.json')
        .then(response => response.json())
        .then(data => {
            // Supondo que você queira carregar o perfil do primeiro usuário no JSON
            const cadastro = data[0].cadastro; 
            const login = data[0].login;

            document.getElementById('nome').textContent = cadastro.nome || 'Não disponível';
            document.getElementById('cpf').textContent = cadastro.CPF || 'Não disponível';
            document.getElementById('email').textContent = login.email || 'Não disponível';
            document.getElementById('dataNascimento').textContent = cadastro.data_nascimento || 'Não disponível';
            document.getElementById('sexo').textContent = cadastro.sexo || 'Não disponível';
            document.getElementById('cidade').textContent = cadastro.cidade || 'Não disponível';
            document.getElementById('estado').textContent = cadastro.estado || 'Não disponível';

            // Para a senha, normalmente não mostramos em uma tela de perfil
            document.getElementById('senha').textContent = '********';
            document.getElementById('confirmarSenha').textContent = '********';

            // Para o currículo, você pode decidir como quer mostrar
            // Por exemplo, se for um link, você pode criar um link para download
            // document.getElementById('curriculo').innerHTML = '<a href="' + caminhoDoCurriculo + '">Download</a>';

        })
        .catch(error => {
            console.error('Erro ao carregar os dados do perfil:', error);
        });
});
