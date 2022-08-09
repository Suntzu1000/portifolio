const btoFechar = document.querySelector('.bto-fechar');
const menu = document.querySelector('.menu');
const btoSanduiche = document.querySelector('.sanduiche')

btoFechar.addEventListener('click', menuEsconderMostrar);
btoSanduiche.addEventListener('click', menuEsconderMostrar);

function menuEsconderMostrar(){
    menu.classList.toggle('esconder-menu');
    btoSanduiche.classList.toggle('esconder-sanduiche')

}

