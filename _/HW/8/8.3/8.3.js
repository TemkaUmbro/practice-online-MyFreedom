// Вводишь название цвета через выпадающий список
// Нажимаешь на кнопку
// Бэкграунд у body раскрашивается в цвет, который выбрали (используя атрибут class)
// Что нужно знать:
// document.body.className
// с точки зрения CSS атрибут style “важнее”, чем атрибут class

const applyBGC = () => {
    document.body.className = document.body.querySelector('.selectColor').value;
};
