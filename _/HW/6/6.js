// 0. Решение через filter и includes:

const a = [1, 4, 'string', false, 9, 234, 50];
const b = [2, 4, 'строка', false, 9, 243, -2];

const findCommonElements = (a, b) => {
 return a.filter(el => b.includes(el));
}

console.log(findCommonElements(a, b))

// 1. Возвращает резуьтат функции в консоль:

function add(a, b, c) {
    return console.log(`Addition result equals ${a + b + c}`)
  }
  
  add(15, 27, 10); // Addition result equals 52
  add(10, 20, 30); // Addition result equals 60
  add(5, 10, 15); // Addition result equals 30
  
  // 2. Возвращает резуьтат функции:
  
  function checkStorage(available, ordered) {
    let message;
    if (ordered > available) {
      message = 'Not enough goods in stock!';
    } else {
      message = 'Order is processed, the manager will contact you';
    }
    return message;
  }
  
  // console.log(checkStorage(100, 50)); // "Order is processed, the manager will contact you"
  // console.log(checkStorage(100, 130)); // "Not enough goods in stock!"
  // console.log(checkStorage(200, 20)); // "Order is processed, the manager will contact you"
  // console.log(checkStorage(200, 150)); // "Order is processed, the manager will contact you"
  // console.log(checkStorage(150, 180)); // "Not enough goods in stock!"
  
  // 3. Возвращает резуьтат функции:
  
  function checkStorage(available, ordered) {
    return message = (ordered > available) ? 'Not enough goods in stock!' : 'Order is processed, the manager will contact you';
  }
  
  // console.log(checkStorage(100, 50)); // "Order is processed, the manager will contact you"
  // console.log(checkStorage(100, 130)); // "Not enough goods in stock!"
  // console.log(checkStorage(200, 20)); // "Order is processed, the manager will contact you"
  // console.log(checkStorage(200, 150)); // "Order is processed, the manager will contact you"
  // console.log(checkStorage(150, 180)); // "Not enough goods in stock!"
