let popup = document.querySelectorAll('.swiper-slide__popup');
let openPopup = document.querySelector('.control-btn');

let tablet = window.innerWidth;
let desktop = window.innerWidth;

let show = function (hide) {
	for (let i = 0; i < popup.length; i++) {
				popup[i].classList.remove(hide);
			};
			openPopup.innerHTML = 'Скрыть';
			openPopup.classList.add('control-btn__popup-close');
}

openPopup.addEventListener('click', function() {
	if (tablet > 767 && tablet < 1120) {
		if (openPopup.innerHTML === 'Показать все') {
			show('tablet-hide');
		} else {
            for (let i = 0; i < popup.length; i++) {
                popup[i].classList.add('tablet-hide');
                openPopup.innerHTML = 'Показать все';
            };
	    } 
    }  else if (desktop >= 1120) {
	    if (openPopup.innerHTML === 'Показать все') {
			show('desktop-hide');
		} else {
            for (let i = 2; i < popup.length; i++) {
                popup[i].classList.add('desktop-hide');
                openPopup.innerHTML = 'Показать все';
            };
	    } 
    }
});
