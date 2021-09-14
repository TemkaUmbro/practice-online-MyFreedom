import Service from './Service.js';

const service = new Service({ url: 'https://jsonplaceholder.typicode.com/todos' });

const logData = (data) => {
    data.forEach((el) => console.log(el));
};

service.getData({ callBack: logData });
