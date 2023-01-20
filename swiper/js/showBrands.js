let buttonShow = document.querySelector(".b-show-more");
let brandsList = document.querySelector(".swiper");
let buttonText = document.querySelector(".b-show-more__text");
let buttonIcon = document.querySelector(".b-show-more__icon");

function handleClickBrands() {
    if (document.documentElement.clientWidth < 1120) {
        brandsList.classList.toggle("swiper--tablet");
    }
    if (document.documentElement.clientWidth >= 1120) {
        brandsList.classList.toggle("swiper--desktop");
    }
    buttonIcon.classList.toggle("swiper-animation--up");
    if (
    !brandsList.classList.contains("swiper--desktop") &&
    !brandsList.classList.contains("swiper--tablet")
    ) {
    buttonText.textContent = "Показать все";
    } else {
    buttonText.textContent = "Скрыть";
    }
}

buttonShow.addEventListener("click", handleClickBrands);





/*openPopup.addEventListener('click', function () {
	openPopup.classList.add('.control-btn__popup-open')
	for (let slide of cards) {
		slide.style.display = 'block' 
	}
    if (document.documentElement.clientWidth < 1120) {
        cards.classList.toggle('swiper-slide--tablet');
    }
    if (document.documentElement.clientWidth >= 1120) {
        cards.classList.toggle('.swiper-slide--desktop');
    }
    openPopup.innerHTML = 'Скрыть';
    openPopup.classList.add('control-btn__popup-close');
    
});*/
