// Выбираешь цвет через input type="color"
// Нажимаешь на кнопку
// Бэкграунд у body раскрашивается в цвет, который выбрали (используя css переменные)
// Что нужно знать:
// Теория: https://m-fd2-54-19.firebaseapp.com/homework-2/cssvariables/
// CSS переменные (= CSS Variables = CSS Custom Properties) на данный момент поддерживаются везде, кроме IE

const applyColor = () => {
    const selectColor = document.querySelector('.mySelect').value;
    document.body.style.setProperty('--bgcolor', selectColor);
};
