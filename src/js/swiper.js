
let swiper;
let mobile = window.innerWidth
function initSwiper() {
	if (mobile <= 550) {
		if (!swiper) {
		  swiper = new Swiper(".swiper-container", {
			  slidesPerView: "auto",
        spaceBetween: 16,
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