// реализовать задания с бэкграундом используя метод AddEventListener

// 1--------------------------------------------------------------------------------------------
// Вводишь название цвета через текстовое поле
// Нажимаешь на кнопку
// Бэкграунд у body раскрашивается в цвет, который ввели (используя атрибут style)

button1.addEventListener('click', () => {
    document.body.className = '';
    document.body.style.setProperty('--color', document.querySelector('input').value)
    document.querySelector('input').value = '';
});

// 2--------------------------------------------------------------------------------------------
// Вводишь название цвета через выпадающий список
// Нажимаешь на кнопку
// Бэкграунд у body раскрашивается в цвет, который выбрали (используя атрибут style)

button2.addEventListener('click', () => {
    document.body.className = '';
    document.body.style.setProperty('--color', document.querySelector('select').value);
    document.querySelector('select').value = select[0].value;

});

// 3--------------------------------------------------------------------------------------------
// Вводишь название цвета через выпадающий список
// Нажимаешь на кнопку
// Бэкграунд у body раскрашивается в цвет, который выбрали (используя атрибут class)

button3.addEventListener('click', () => {
    document.body.className = document.querySelector('#selector').value;
    document.querySelector('#selector').value = selector[0].value;
});

// 4--------------------------------------------------------------------------------------------
// Выбираешь цвет через input type="color"
// Нажимаешь на кнопку
// Бэкграунд у body раскрашивается в цвет, который выбрали (используя css переменные)

button4.addEventListener('click', () => {
    document.body.className = '';
    document.body.style.setProperty('--color', document.querySelector('#palette').value);
});

// 5--------------------------------------------------------------------------------------------
// Выбираешь цвет из выпадающего списка
// Бэкграунд у body раскрашивается в цвет, который выбрали

document.querySelector('#paletteSelector').addEventListener('change', () => {
    document.body.className = '';
    document.body.style.setProperty('--color', document.querySelector('#paletteSelector').value);
});
