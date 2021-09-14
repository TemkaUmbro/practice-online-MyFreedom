// 7* - Написать функцию, которая возвращает случайное целое число от min до max, которые передаются в нее как аргументы

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(randomNumber(-51, -1));
// console.log(randomNumber(10, 100));
// console.log(randomNumber(1, 124));
