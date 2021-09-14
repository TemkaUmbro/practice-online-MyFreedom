import Service from './Service.js';

const service = new Service({ url: 'https://jsonplaceholder.typicode.com/todos' });

const logData = (data) => {
 console.log(data);
};

service.getData({ callBack: logData });
