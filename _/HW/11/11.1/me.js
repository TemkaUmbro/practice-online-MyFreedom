// 1 - в функциях-конструкторах Me и Room создать методы (на прототипе), которые будут описывать вас и вашу комнату, данные в методах получаем через this

function Me() {
    this.head = 1;
    this.headRadius = 55;
    this.hands = 2;
    this.fingers = 20;
    this.footSize = 40.5;
    this.legs = 2;
    this.noseType = 'short';
    this.eyeColor = 'brown';
    this.gender = 'male';
}

Me.prototype.describe = function() {
    console.log(this.headRadius);
    console.log(this.head);
    console.log(this.fingers);
    console.log(this.length);
    console.log(this.footSize);
    console.log(this.noseType);
    console.log(this.eyeColor);
    console.log(this.gender);
};

export { Me };
