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
