// função de troca de imagem no icone da navegação

function trocarImagem() {
    const img = document.getElementById('sobre-img');
    if (img.src.includes('JulyhProgramando.webp')) {
        img.src = 'assets/images/Julyh.jpg';
    } else {
        img.src = 'assets/images/JulyhProgramando.webp';
    }
}

/* Menu responsivo */

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/images/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "assets/images/close_white_36dp.svg";
    }
}

