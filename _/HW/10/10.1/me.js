// 1 - описать себя и комнату через объекты, которые создаются в главном модуле, при этом функции-конструкторы Me и Room лежат в me.js и room.js, а импортируются в main.js

function Me(){
    this.name = 'Artsiom';
    this.lastname = 'Umbryian';
    this.heigth = '165 sm';
    this.weight = '65 kg';
    this.eyeColor = 'brown';
};

export { Me };
