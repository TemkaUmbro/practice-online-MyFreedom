// 1 - в функциях-конструкторах Me и Room создать методы (на прототипе), которые будут описывать вас и вашу комнату, данные в методах получаем через this

function Room() {
    this.area = '20 m²';
    this.table = '1';
    this.compeuter = '2';
    this.meow = {
        type: 'cat',
        name: 'kassy',
        weigth: '4.4',
        yearOld: '3',
    };
    this.reptile = {
        type: 'turtle',
        name: 'cherepashka',
        weigth: '1.2',
        yearOld: '5',
    };
}

Room.prototype.properties = function() {
    console.log(this.area);
    console.log(this.table);
    console.log(this.compeuter);
    console.log(this.meow);
    console.log(this.reptile);
};

export { Room };
