// 1 - описать себя и комнату через объекты, которые создаются в главном модуле, при этом функции-конструкторы Me и Room лежат в me.js и room.js, а импортируются в main.js

function Room(){
    this.area = '20 m²';
    this.table = '1';
    this.compeuter = '2';
    this.meow = {
        type: 'cat',
        name: 'Kassy',
        weigth: '4.4 kg',
        yearsOld: '3',
    };
    this.reptile = {
        type: 'turtle',
        name: 'Cherepashka',
        weigth: '1.2 kg',
        yearsOld: '5',
    };
};

export { Room };
