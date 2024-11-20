// função de troca de imagem no icone da navegação

function trocarImagem() {
    const img = document.getElementById('sobre-img');
    if (img.src.includes('JulyhProgramando.webp')) {
        img.src = 'assets/images/Julyh.jpg';
    } else {
        img.src = 'assets/images/JulyhProgramando.webp';
    }
}

