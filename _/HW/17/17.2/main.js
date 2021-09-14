// написать функцию, которая будет рекурсивно копировать объект, в случае циклических ссылок (circular references) - присваивать полю значение circular reference is detected. Для перебора элементов массива использовать for и forEach

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

// for:
function getCopyObject(el) {
    const newCopyObject = {};
    const keys = Object.keys(el);
    for (let i = 0; i < keys.length; i++) {
        newCopyObject[keys[i]] = el[keys[i]];
        if (typeof el[keys[i]] === 'object') {
            if (el[keys[i]] === el) {
                newCopyObject[keys[i]] = 'circular reference is detected';
            } else {
                newCopyObject[keys[i]] = getCopyObject(el[keys[i]]);
            }
        }
    }
    return newCopyObject;
}

console.log(getCopyObject(obj));

// forEach:
function getCopyObj(element) {
    const newObject = {};
    Object.keys(element).forEach((key) => {
        newObject[key] = element[key];
        if (typeof element[key] === 'object') {
            if (element[key] === element) {
                newObject[key] = 'circular reference is detected';
            } else {
                newObject[key] = getCopyObj(element[key]);
            }
        }
    });
    return newObject;
}

console.log(getCopyObj(obj));
