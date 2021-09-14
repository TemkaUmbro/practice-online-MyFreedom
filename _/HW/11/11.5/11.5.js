// 5* - прочитать статью — https://learn.javascript.ru/object-copy#klonirovanie-i-obedinenie-obektov-object-assign , по сравнению и клонированию объектов, придумать пример на клонирование при помощи Object.assign

const Belarus2021 = {
    president: 'AGLы',
    population2021: 9442862,
    population2020: 9408400,
    population2019: 9413446,
    density: '45.8/km²',
    area: '207.595 km²'
};

const citys = { 
    capital: 'Minsk',
    north: 'Vitebsk',
    west: 'Grodo',
    east: 'Mogilev',
    southWest: 'Brest',
    southEast: 'Gomel',
};

const Belarus2022 = Object.assign({}, Belarus2021, citys);

Belarus2022.population2022 = '???';
Belarus2022.president = '???';

// console.log(Belarus2021);
// console.log(Belarus2022);
// console.log(Belarus2022 === Belarus2021);    // false
// console.log(Belarus2022.area === Belarus2021.area);  //true