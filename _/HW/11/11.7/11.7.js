// 7* - создать страницу, на которой при помощи forEach, погружения (capturing) и всплытия (bubbling) будут добавлены слушатели событий на все элементы верстки и при клике на любой элемент в обработчике события выведутся последовательно все элементы при помощи this (для погружения) и e.currentTarget (для всплытия)

// const myPage = [body, main, div, p, div2, p2];
const myPage = document.querySelectorAll('*');

function capture() {
    console.log(`Погружaемся: ${this.tagName}`);
}

function bubble(e) {
    console.log(`Всплываем: ${e.currentTarget.tagName}`);
}

myPage.forEach((element) => {
    element.addEventListener('click', capture, true);
    element.addEventListener('click', bubble);
});
