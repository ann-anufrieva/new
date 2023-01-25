let readMore = document.querySelector('.read-more_btn');
let textMore = document.querySelector('.content-text__txt-more');

readMore.addEventListener('click', function() {
   if (readMore.innerHTML === 'Читать далее') {
      console.log('jnsjec');
      readMore.innerHTML = 'Скрыть'
      textMore.classList.add('content-text__txt-show');
   } else {
      console.log('jnsjec');
      textMore.classList.remove('content-text__txt-show');
      readMore.innerHTML = 'Читать далее';
   }
})