// Extrair o nome do usuário da URL
const params = new URLSearchParams(window.location.search);
const nomeUsuario = params.get('nome');

// Verificar se o nome do usuário existe e atualizar o elemento HTML
if (nomeUsuario) {
    const saniNome = `Ola ${nomeUsuario}`
    document.getElementById("nomeUsuario").textContent = saniNome;
} 

// Seleciona o elemento do header
var header = document.querySelector("header");

// Obtém a posição inicial do header em relação ao topo da página
var sticky = header.offsetTop;

// Adiciona um evento de scroll à página
window.onscroll = function () {
    // Verifica se a posição do scroll ultrapassou a posição inicial do header
    if (window.pageYOffset > sticky) {
        // Adiciona a classe "fixed" ao header
        header.classList.add("fixed");
    } else {
        // Remove a classe "fixed" do header
        header.classList.remove("fixed");
    }
};
function openModal() {
    document.getElementById('modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}
