document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.getElementById('burgerMenu');
  const alphabetMenu = document.getElementById('alphabetMenu');
  const letters = alphabetMenu.querySelectorAll('.letter');

  // Показывать/скрывать буквы по клику на бургер
  burgerMenu.addEventListener('click', function () {
    alphabetMenu.classList.toggle('active');
  });

  // Скролл к нужной букве
  letters.forEach(letter => {
    letter.addEventListener('click', function () {
      const id = letter.getAttribute('data-letter');
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
        alphabetMenu.classList.remove('active');
      }
    });
  });
});