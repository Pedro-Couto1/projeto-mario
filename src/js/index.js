// Pegar o elemento que representa o botão na tela usando js.

const botaoTrailer = document.querySelector(".botao-trailer");

// Pegar elemento do trailer

const video = document.getElementById("video");

// Pegar o elemento da modal no js

const modal = document.querySelector(".modal");

// Valor do video

const linkDoVideo = video.src;

// Pegar o elemento de fechar a modal

const botaoFecharModal = document.querySelector(".fechar-modal");

// Alternar modal

function alternarModal(){
    modal.classList.toggle("aberto");
};

// Identificar quando o usuario clicar no botão

botaoTrailer.addEventListener("click", () => {
// Abrir a modal na tela
    alternarModal();

// Adicionar trailer na modal
    video.setAttribute("src", linkDoVideo);
});

// Identificar quando usuario clicar no X

botaoFecharModal.addEventListener("click", () => {
// Fechar a modal
    alternarModal();

// Pausar trailer apos fechar modal
    video.setAttribute("src", "");
});


