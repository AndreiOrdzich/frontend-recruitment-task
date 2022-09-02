let body = document.querySelector('.body'); // все тело документа
let popupBg = document.querySelector('.popup-bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.button'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
let counter = document.querySelector('.counter');
var main = document.querySelector('main');
var lockPaddingValue = window.innerWidth - document.querySelector('.main').offsetWidth + 'px'; // подсчет толщины скролл



/*start Popup*/
openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        let counter = document.querySelector('.counter');
        counter.innerHTML = (counter.innerHTML * 1) + 1;
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        body.style.paddingRight = lockPaddingValue;
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
        document.body.style.overflowY = "hidden"; // убираем возможность прокручивать документ
    })
});

closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
    setTimeout(function() {
        body.style.overflowY = "visible"; // возвращаем возможность прокрутки документа
        body.style.paddingRight = '0px'; // возвращаем нулевой отступ для body
    }, 500);
})

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBg) { // Если цель клика - фон, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
        setTimeout(function() {
            body.style.overflowY = "visible"; // возвращаем возможность прокрутки документа
            body.style.paddingRight = '0px'; // возвращаем нулевой отступ для body
        }, 500);
    }
});
/*end Popup*/