document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    fetch("http://localhost:8080/pessoas")
        .then(response => response.json())
        .then(data => {
            var usuario = data.find(user => user.email === email && user.senha === senha);
            if (usuario) {
                // Redirecionar para a página home.html em caso de sucesso
                window.location.href = "./home.html";
            } else {
                // Exibir mensagem de erro ao usuário
                alert("Email ou senha inválidos. Por favor, tente novamente.");
            }
        })
        .catch(error => {
            console.error(error);
            alert("Erro ao realizar o login. Por favor, tente novamente mais tarde.");
        });
});
