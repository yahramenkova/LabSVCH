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

let currentLanguage = localStorage.getItem('currentLanguage') || 'en';

// Устанавливаем сохраненный язык при загрузке страницы
getTranslate(currentLanguage);

switchToEnglish.addEventListener('click', () => {
  currentLanguage = 'en';
  localStorage.setItem('currentLanguage', currentLanguage);
  getTranslate(currentLanguage);
});

switchToRussian.addEventListener('click', () => {
  currentLanguage = 'ru';
  localStorage.setItem('currentLanguage', currentLanguage);
  getTranslate(currentLanguage);
});

  })
  .catch(error => console.error('Ошибка при загрузке json файла:', error));

  const themeToggleBtn = document.getElementById('theme-toggle');
  const elementsToToggle = document.querySelectorAll('.content');

  let isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';

// Проверяем, была ли сохранена предыдущая настройка темы
if (isDarkTheme) {
  document.body.classList.add('dark-theme');
}

themeToggleBtn.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    localStorage.setItem('isDarkTheme', isDarkTheme.toString());
  
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
const image = document.getElementById('img1');
const button = document.getElementById('button2');

const imagePaths = [
  'pictures/img1.png',
  'pictures/block3-2.png',
  'pictures/img4.png',
];

let currentImageIndex = 0; // Индекс текущего изображения

button.addEventListener('click', () => {

  currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
  image.src = imagePaths[currentImageIndex];
})