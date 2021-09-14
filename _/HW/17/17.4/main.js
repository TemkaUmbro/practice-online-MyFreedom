const obj = {
    a: 'a',
    b: {
        b1: 'b1',
        c: {
            c1: 'c1',
            d: {
                d1: [1, 2, 3],
                d2: 'space',
                function() {},
            },
        },
    },
};

obj.copy = obj;

let calls = 0;
const arr = [];
obj.qwe = { xyz: obj };

function checkArr() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === obj) {
            return true;
        }
    }
    return false;
}

function getCopyObj(el) {
    const newObject = {};
    Object.keys(el).forEach((key) => {
        arr.push(el[key]);
        newObject[key] = el[key];
        if (typeof el[key] === 'object') {
            if (checkArr() === true) {
                newObject[key] = 'circular reference is detected';
            } else if (Array.isArray(el[key])) {
                newObject[key] = JSON.parse(JSON.stringify(el[key]));
            } else {
                calls += 1;
                newObject[key] = getCopyObj(el[key]);
            }
        }
    });
    return newObject;
}

console.log(getCopyObj(obj));
console.log(calls);
