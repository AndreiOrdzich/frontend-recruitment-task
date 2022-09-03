let body = document.querySelector('.body'); // все тело документа
let popupBg = document.querySelector('.popup-bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.button'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
let counter = document.querySelector('.counter'); // Число кликов на кнопку
const buttonReset = document.querySelector('.button-reset') // Кнопка сброса счетчиков
var lockPaddingValue = window.innerWidth - document.querySelector('.main').offsetWidth + 'px'; // подсчет толщины скролл
let counter1 = 0;
let counter2 = 0;


/*start Popup*/
openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        if(e.target.classList.contains("button1")){
                counter1++;
                 counter.innerHTML = counter1;
                 if (counter1 === 5) {
                    buttonReset.setAttribute('style', 'opacity: 1; transform: translate(20px, 185%)');
                    buttonReset.addEventListener('click', (e) => {
                        e.preventDefault();
                        counter1 = 0;
                        counter2 = 0;
                        buttonReset.setAttribute('style', 'opacity: 0; transform: translate(-100%, 0%)');
                        localStorage.clear();
                    })
                }
        }
        if(e.target.classList.contains("button2")){
                counter2++;
                counter.innerHTML = counter2;
                if (counter2 === 5) {
                    buttonReset.setAttribute('style', 'opacity: 1; transform: translate(20px, 185%)');
                    buttonReset.addEventListener('click', (e) => {
                        e.preventDefault();
                        counter1 = 0;
                        counter2 = 0;
                        buttonReset.setAttribute('style', 'opacity: 0; transform: translate(-100%, 0%)');
                        localStorage.clear();
                    })
                }
        }
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
        counter.innerHTML = '0';
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

//local storage
function setLocalStorage() {
    localStorage.setItem('counter1', counter1);
    localStorage.setItem('counter2', counter2);

}

function getLocalStorage() {
    if (localStorage.getItem('counter1')) {
   counter1 = localStorage.getItem('counter1')
    }
    if (localStorage.getItem('counter2')) {
        counter2 = localStorage.getItem('counter2')
    }
}

//вызовы функций локального хранилища
window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);