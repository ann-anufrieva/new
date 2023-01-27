let popupMenu = document.querySelector('.burger-menu');
let menuOpen = document.querySelector('.modal-button__btn_menu');
let body = document.querySelector('.burger-menu__wrapper');
let burgerMenuClose = document.querySelector('.modal-button__btn_close');

let showMenu = function(close, show, page) {
    popupMenu.classList.remove(close);
    popupMenu.classList.add(show);
    body.classList.add(page);
}

let closeMenu = function(hide, open, del) {
    popupMenu.classList.add(hide);
    popupMenu.classList.remove(open);
    body.classList.remove(del);
}

menuOpen.addEventListener('click', function() {
    showMenu('closeBgMenu', 'showBgMenu', 'whole-page');
});

burgerMenuClose.addEventListener('click', function() {
    closeMenu('closeBgMenu', 'showBgMenu', 'whole-page');
});

body.addEventListener('click', function() {
    closeMenu('closeBgMenu', 'showBgMenu', 'whole-page');
});