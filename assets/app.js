function playVideo() {
    // Esconde a miniatura
    document.querySelector('.thumbnail').style.display = 'none';
    
    // Exibe o iframe
    var iframe = document.getElementById('video');
    iframe.style.display = 'block';
    
    // Adiciona o atributo src ao iframe para carregar o vídeo
    iframe.src = iframe.getAttribute('data-src');
  }
  