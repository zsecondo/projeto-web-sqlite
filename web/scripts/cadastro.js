


document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var contato = document.getElementById("contato").value;
    var endereco = document.getElementById("endereco").value;
    var empresa = document.getElementById("empresa").value;
    var cnpj = document.getElementById("cnpj").value;
    var senha = document.getElementById("senha").value;
    var camposInvalidos = [];

    function validarNome(nome) {
        // Expressão regular para validar nomes (pelo menos um nome e um sobrenome)
        var regex = /^(?:[a-zA-Z]+ ){1,4}[a-zA-Z]+$/;
    return regex.test(nome);
    }
    
    
    function validarEmail(email) {
        // Verificar se o email contém @
        return email.includes("@");
    }
    
    function validarContato(contato) {
        // Expressão regular para validar números de contato com DDD opcional e 9 dígitos
        var regex = /^(?:\+\d{1,2}\s?)?(?:(?:\(?[1-9]{2}\)?\s?)?)?[9]\d{4}\-?\d{4}$/;
        return regex.test(contato);
    }
    
    function validarEndereco(endereco) {
        // Adicione sua lógica de validação de endereço aqui, se necessário
        return endereco.trim() !== "";
    }

    function validarEmpresa(empresa) {
        // Adicione sua lógica de validação de empresa aqui, se necessário
        return empresa.trim() !== "";
    }
    
    function validarCnpj(cnpj) {
        // Verificar se o CNPJ tem 14 dígitos e é numérico
        var regex = /^\d{14,}$/;
        return regex.test(cnpj);
    }
    
    function validarSenha(senha) {
        // Verificar se a senha tem pelo menos 8 caracteres
        return senha.length >= 8;
    }
    
    if (!validarNome(nome)) {
        camposInvalidos.push("Nome");
    }

    if (!validarEmail(email)) {
        camposInvalidos.push("Email");
    }

    if (!validarContato(contato)) {
        camposInvalidos.push("Contato");
    }

    if (!validarEndereco(endereco)) {
        camposInvalidos.push("Endereço");
    }

    if (!validarEmpresa(empresa)) {
        camposInvalidos.push("Empresa");
    }

    if (!validarCnpj(cnpj)) {
        camposInvalidos.push("CNPJ");
    }

    if (!validarSenha(senha)) {
        camposInvalidos.push("Senha");
    }

    if (camposInvalidos.length > 0) {
        // Exibir mensagem de erro ao usuário indicando quais campos estão inválidos
        alert("Por favor, preencha os seguintes campos corretamente: " + camposInvalidos.join(", "));
        return;
    }

    

    // Enviar os dados para a API usando o método POST
    var dados = {
        nome: nome,
        email: email,
        endereco: endereco,
        empresa: empresa,
        contato: contato,
        cnpj: cnpj,
        senha: senha
    };

    fetch("http://localhost:8080/pessoa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(response => {
        if (response.ok) {
            // Redirecionar para a página de login após o cadastro bem-sucedido
            window.location.href = "./login.html";
        } else {
            throw new Error("Erro ao cadastrar. Por favor, tente novamente.");
        }
    })
    .catch(error => {
        console.error(error);
        alert(error.message);
    });
});

