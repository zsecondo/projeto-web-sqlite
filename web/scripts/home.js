// Extrair o nome do usuário da URL
const params = new URLSearchParams(window.location.search);
const nomeUsuario = params.get('nome');

// Verificar se o nome do usuário existe e atualizar o elemento HTML
if (nomeUsuario) {
    document.getElementById("nomeUsuario").textContent = nomeUsuario;
} 
