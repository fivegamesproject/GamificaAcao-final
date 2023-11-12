document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

    fetch('/database/cadastros.json')
        .then(response => response.json())
        .then(data => {
            var usuarioValido = data.find(u => u.login.email === email && u.login.senha === password);

            if (usuarioValido) {
                alert("Login bem-sucedido!");
            } else {
                alert("Email ou senha incorretos!");
            }
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
            alert("Erro ao carregar os dados de login.");
        });
    });
});
