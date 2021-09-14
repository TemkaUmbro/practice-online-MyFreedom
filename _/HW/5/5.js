// 0 — Решение через for и push:

const a = [1, 4, 'string', false, 9, 234, 50];
const b = [2, 4, 'строка', false, 9, 243, -2];

const findCommonElements = (a, b) => {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {                    
        result.push(a[i]) 
      }
      // a[i] === b[j] ? result.push(a[i]) : ''; // тернарный способ
    }
  }
  return result;
}
 
console.log(findCommonElements(a, b));

// 1 — Изучил слайды

// 2, 3 — Описание самого себя:

const Temka = {
    name: 'Артём'
    };
    const inSports = {
    weightlifting: 'master of sport',
    powerlifting: 'master of sport'
    };
    Temka.achievements = inSports;
    Temka.age = 27;
    Temka.eyeColor = 'brown';
    Temka.music = 'rock';
    
console.log(Temka);

// 4 — Описание комнаты и живущих в ней питомцев:

const myRoom = {};
  myRoom.bed = '1шт'; 
  myRoom.wallpaperСolor = 'multicolored';
const pets = {
  cat: '1шт',
  catName: 'Кэсси',
  catWeight: '4кг',
  catAge: '2 года',
  turtle: 'Полли',
  turtleName: '1шт',
  turtleWeight: '0.5кг',
  turtleAge: 'около 5 лет'
  };
  myRoom.pets = pets;
  
console.log(myRoom);

// 5 — изучил слайды и методы п оработе с массивами

// 6 — примеры функций: splice, push, pop, shift, unshift, delete.
    
const arr = ['Добрый день наставник!', 'Попробую использование функции — splice'];
  console.log(arr);
  
arr.splice(0, 2);

  console.log(arr);
  
arr.push('Далее использую функцию — push и следом функцию — shift');

  console.log(arr);
  
arr.shift();

  console.log(arr);
  
arr.unshift('и напоследок использую функцию — unshift');

  console.log(arr);
  
delete arr[0];

  console.log(arr);
  
arr[0] = 'Конец!';

console.log(arr);

// 7 — массив из 5 элементов, с использованием цикла for и с вывом каждого второй элемента массива в консоль

const newArr = ['1st', '2nd','3rd', '4r', '5th'];
for (let i = 0; i < newArr.length; i++) {
    if (i % 2 !== 0) {
    
      console.log(`Рузультат(ы) решения 7-го задания — ${newArr[i]}`)
  }
}

// 8 — Всё гуд!

// 9 — Установил Live Share экстеншн в VSCode

// 10 — Вроде научился
