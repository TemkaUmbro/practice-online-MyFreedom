// 3.1 - в п. 2 перед выводом данных в консоль используя map и toUpperCase преобразовать данные, таким образом, чтобы в каждом объекте, который выведется в консоль значение поля title отобразилось в верхнем регистре (состояло только из заглавных букв), данные были отсортированы при помощи sort по убыванию значения поля id и отфильтрованы при помощи filter по критерию 5 < userId < 10 (userId больше 5 и меньше 10)
// 3.2 - в п. 3 используя map преобразовать результирующий массив таким образом, что поле title теперь будет содержать содержит не строку, а массив из всех слов этой строки (для преобразования строки в массив используем split

import Service from './Service.js';

const service = new Service({ url: 'https://jsonplaceholder.typicode.com/todos' });

const logData = (data) => {
    const newData = data
        .map((el) => { // 3.1
            el.title = el.title.toUpperCase();
            return el;
        })
        .sort((a, b) => // 3.1
            (a.id < b.id ? 1 : -1))
        .filter((el) => // 3.1
            el.userId > 5 && el.userId < 10)
        .map((el) => { // 3.2
            el.title = el.title.split(' ');
            return el;
        })
        .forEach((el) => console.log(el));
    console.log(data);
};

service.getData({ callBack: logData });
