const openPopup = document.querySelector('.control-btn');
const cards = document.querySelectorAll('.swiper-slide');

openPopup.addEventListener('click', function () {
	openPopup.classList.add('.control-btn__popup-open')
	for (let slide of cards) {
		slide.style.display = 'block' 
	}

	openPopup.innerHTML = 'Скрыть';
	openPopup.classList.add('control-btn__popup-open');
});

const smoothScrolls = document.querySelectorAll('.control-btn');
for (let smoothScroll of smoothScrolls) {
    smoothScroll.addEventListener("click", function (el) {
        el.preventDefault();
        const btn = smoothScroll.getAttribute('type');

        document.querySelector(btn).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};