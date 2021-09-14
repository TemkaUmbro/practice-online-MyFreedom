// написать функцию, которая будет рекурсивно копировать объект, в случае циклических ссылок (circular references) - присваивать полю значение circular reference is detected. Для перебора элементов массива использовать цикл for .. in.

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

function getCopyObj(el) {
    const newObj = {};
    for (const key in el) {
        newObj[key] = el[key];
        if (typeof el[key] === 'object') {
            if (el[key] === el) {
                newObj[key] = 'circular reference is detected';
            } else {
                newObj[key] = getCopyObj(el[key]);
            }
        }
    }
    return newObj;
}

obj.copy = obj;
console.log(getCopyObj(obj));
