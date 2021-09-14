// Выбираешь цвет из выпадающего списка
// Бэкграунд у body раскрашивается в цвет, который выбрали (используя css переменные, событие change и передачу this в качестве входного параметра)
// Что нужно знать:
// Теория:
// Событие change https://m-fd2-54-19.firebaseapp.com/homework-2/#event_change
// "this" при обработке событий https://m-fd2-54-19.firebaseapp.com/homework-2/#this

const applyBGC = () => {
    document.body.className = document.body.querySelector('.selector').value;
};
