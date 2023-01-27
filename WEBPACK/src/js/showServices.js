let popupElse = document.querySelectorAll('.swiper-slide__else');
let openPopupMore = document.querySelector('.control-btn__more');

openPopupMore.addEventListener('click', function() {
    console.log('sdljnkfl');
    if (openPopupMore.innerHTML === 'Показать все') {
        for (let i = 0; i < popupElse.length; i++) {
        popupElse[i].classList.remove('tablet-hide');
        };
        openPopupMore.innerHTML = 'Скрыть';
        openPopupMore.classList.add('control-btn__popup-close');
    } else if (openPopupMore.innerHTML === 'Скрыть') {
        for (let i = 3; i < popupElse.length; i++) {
            popupElse[i].classList.add('tablet-hide');
            openPopupMore.innerHTML = 'Показать все';
        };
    }
})