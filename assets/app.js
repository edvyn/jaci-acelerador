function playVideo() {
    // Esconde a miniatura
    document.querySelector('.thumbnail').style.display = 'none';
    
    // Exibe o iframe
    var iframe = document.getElementById('video');
    iframe.style.display = 'block';
    
    // Adiciona o atributo src ao iframe para carregar o vídeo
    iframe.src = iframe.getAttribute('data-src');
}

  document.querySelectorAll(".pergunta").forEach(button => {
    button.addEventListener("click", () => {
        const item = button.parentElement;
        item.classList.toggle("ativo");

        // Fecha os outros itens quando um novo é aberto
        document.querySelectorAll(".item").forEach(outroItem => {
            if (outroItem !== item) {
                outroItem.classList.remove("ativo");
            }
        });
    });
});

function loadVideo(element, videoUrl) {
    element.innerHTML = `<iframe src="${videoUrl}" allowfullscreen></iframe>`;
}