//  6* - реализовать клонирование из задания 2 через метод cloneDeep (https://lodash.com/docs/4.17.15#cloneDeep) библиотеки LoDash

const Belarus2021 = {
    president: 'AGLы',
    population2021: 9442862,
    population2020: 9408400,
    population2019: 9413446,
    density: '45.8/km²',
    area: '207.595 km²',
    citys: {
        capital: 'Minsk',
        north: 'Vitebsk',
        west: 'Grodo',
        east: 'Mogilev',
        southWest: 'Brest',
        southEast: 'Gomel',
    },
};

const Belarus2022 = _.cloneDeep(Belarus2021);
