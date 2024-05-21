// Função para abrir o popup
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

// Função para fechar o popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Evento de clique no botão de adicionar artigo
document.getElementById("addButton").addEventListener("click", function() {
    openPopup();
});
