// Вводишь название цвета через текстовое поле
// Нажимаешь на кнопку
// Бэкграунд у body раскрашивается в цвет, который ввели (используя атрибут style)
// Что нужно знать:
// объекты + обращения к свойствам объекта
// передача параметров
// функция document.querySelector
// document.body.style.backgroundColor

const applyColor = () => {
    const color = document.querySelector('input').value;
    document.body.style.backgroundColor = color;
};
