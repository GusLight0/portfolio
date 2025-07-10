var menu = document.getElementById('menu');
var noScroll = document.body;
var ul = document.querySelector('.list-links');
var links = document.querySelectorAll('.list-links a');

function fecharMenu() {
    ul.classList.remove('ativo');
    noScroll.classList.remove('ativo-tela');
    document.querySelector('#menu img').src = './assets/menu.png';
}

menu.addEventListener('click', () => {
    if(ul.classList.contains('ativo')) {
        fecharMenu();
    } else {
        ul.classList.add('ativo');
        noScroll.classList.add('ativo-tela');
        document.querySelector('#menu img').src = "./assets/close.png"
    }
}) 

// Fechar menu ao clicar em qualquer link
links.forEach(link => {
    link.addEventListener('click', fecharMenu);
});