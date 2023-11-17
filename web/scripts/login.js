document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    let nomeUsuario;

    fetch("http://localhost:8080/pessoas")
        .then(response => response.json())
        .then(data => {
            var usuario = data.find(user => user.email === email && user.senha === senha);
            if (usuario) {
                // Obter o nome do usuário
                return fetch(`http://localhost:8080/nomeUsuario?email=${email}&senha=${senha}`);
            } else {
                // Exibir mensagem de erro ao usuário
                alert("Email ou senha inválidos. Por favor, tente novamente.");
            }
        })
        .then(response => {
            if (response && response.ok) {
                return response.json();
            }
            throw new Error('Usuário não encontrado');
        })
        .then(data => {
            // Obter o nome do usuário retornado pela segunda chamada fetch
            nomeUsuario = data.nome;
            // Redirecionar para a página home.html e exibir o nome do usuário
            window.location.href = `./homeAuth.html?nome=${nomeUsuario}`;
        })
        .catch(error => {
            console.error(error);
            alert("Erro ao realizar o login. Por favor, tente novamente mais tarde.");
        });
});
