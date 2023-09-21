fetch('translate.json')
  .then(response => response.json())
  .then(i18Obj => {
    // Функция для перевода страницы на указанный язык
    function getTranslate(language) {
      const elementsWithTranslation = document.querySelectorAll('[data-i18n]');

      elementsWithTranslation.forEach((element) => {
        const key = element.dataset.i18n;
        const translation = i18Obj[language][key];

        if (translation) {
          element.textContent = translation;
        }
      });
    }

    const switchToEnglish = document.getElementById('English');
    const switchToRussian = document.getElementById('Russian');

    switchToEnglish.addEventListener('click', () => {
      getTranslate('en');
    });

    switchToRussian.addEventListener('click', () => {
      getTranslate('ru');
    });
    getTranslate('en');
  })
  .catch(error => console.error('Ошибка при загрузке json файла:', error));

  const themeToggleBtn = document.getElementById('theme-toggle');
  const elementsToToggle = document.querySelectorAll('.content');
  let isDarkTheme = false;

  themeToggleBtn.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
});
const audio = document.querySelector('audio');
let isPlaying = false;

function toggleAudio() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
}
