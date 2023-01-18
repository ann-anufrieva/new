
let swiper;
function initSwiper() {
	if (window.innerWidth <= 550) {
		if (!swiper) {
		  swiper = new Swiper(".swiper", {
			  slidesPerView: "auto",
			  spaceBetween: 16,
			  loop: true,
			  pagination: {
				  el: ".swiper-pagination",
				  type: 'bullets',
				  clickable: true,
			  },
		  });
	  }
			
		return;
	}

	if (swiper) {
		swiper.destroy();
		swiper = null;
	}
}

window.addEventListener("resize", initSwiper);
initSwiper();

