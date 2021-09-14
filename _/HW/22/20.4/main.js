// 4 - в п. 3 используя reduce в результирующем массиве объектов (полученный после map, sort и filter) посчитать сумму всех значений id

import Service from './Service.js';

const service = new Service({ url: 'https://jsonplaceholder.typicode.com/todos' });

const logData = (data) => {
    const newData = data
        .map((el) => {
            el.title = el.title.toUpperCase();
            return el;
        })
        .sort((a, b) => (a.id < b.id ? 1 : -1))
        .filter((el) => el.userId > 5 && el.userId < 10)
        .map((el) => {
            el.title = el.title.split(' ');
            return el;
        });

    const result = newData.reduce((sum, num) => sum + num.id, 0);

    console.log(result);
};

service.getData({ callBack: logData });
