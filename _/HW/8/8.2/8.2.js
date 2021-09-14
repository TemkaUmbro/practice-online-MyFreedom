// Вводишь название цвета через выпадающий список
// Нажимаешь на кнопку
// Бэкграунд у body раскрашивается в цвет, который выбрали (используя атрибут style)
// Что нужно знать:
// работа с select

const applyBGC = () => {
    document.body.style.backgroundColor = document.querySelector('.selectColor').value;
};
