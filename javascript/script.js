const header = document.querySelector("header")

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 60)
});

function abrirImagem(imagem) {
    // Cria um elemento de imagem maior
    var imagemAmpliada = document.createElement("img");
    imagemAmpliada.src = imagem.src;

    // Cria uma div para a imagem ampliada
    var divAmpliada = document.createElement("div");
    divAmpliada.classList.add("imagem-ampliada");
    divAmpliada.appendChild(imagemAmpliada);

    // Adiciona a div ao corpo do documento
    document.body.appendChild(divAmpliada);

    // Adiciona um evento de clique para fechar a imagem ampliada
    divAmpliada.onclick = function () {
        document.body.removeChild(divAmpliada);
    };
}


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};