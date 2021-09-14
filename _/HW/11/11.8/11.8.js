// 4 - прочитать про глобальную и блочную область видимости, в задании 7 указать область, чем ограничена область видимости (какой функцией, каким блоком, объектом window) всех переменных и функций

function capture() { // функция capture имеет глобальную видимость
    console.log(`Погружaемся: ${this.tagName}`); // область видимости функции ограничена функицией capture
}

function bubble(e) { // функция bubble имеет глобальную видимость
    console.log(`Всплываем: ${e.currentTarget.tagName}`); // область видимости функции ограничена функицией bubble
}

const myPage = document.querySelectorAll('*'); // myPage имеет глобальную видимость

myPage.forEach((e) => {
    e.addEventListener('click', capture, true); //  область видимости ограничена методом forEach
    e.addEventListener('click', bubble); //  область видимости ограничена методом forEach
});
