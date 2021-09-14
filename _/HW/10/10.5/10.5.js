// 5* - (опционно) одно поле input, одна кнопка Click, один select Choose, одна кнопка Remove. На первых трех элементах по 2 обработчика события (в сумме получится 6 обработчиков), выводящих в консоль информацию о том, что кнопка была нажата (событие click), пользователь выбрал поле input (событие focus), пользователь изменил значение выпадающего списка (change). Обработчики добавляем через AddEventListener. По нажатию на третью кнопку отрабатывает RemoveEventListener для каждого обработчика, добавленного ранее. Убедиться, что обработчики событий (focus, click и change), повешенные ранее на первые три элемента перестали вызываться.

focusPocus1 = () => {
    console.log('Если она красного цвета, нажмите на кнопку "Click",');
};

focusPocus2 = () => {
    console.log('если нет, то просто выберите другую масть и нажмите "Click".');
};

input.addEventListener('focus', focusPocus1);
input.addEventListener('focus', focusPocus2);

const clickLog1 = () => {
    console.log('Очень внимательно выберите в выпадающем списке "Правильный" цвет вашей масти...');
};

const clickLog2 = () => {
    console.log('↓↓   О  ЧУДО    ↓↓');
};

clicker.addEventListener('click', clickLog1);
clicker.addEventListener('click', clickLog2);

const myChoise1 = () => {
    console.log('↓↓  Ваша масть  ↓↓');
    document.body.className = document.querySelector('select').value;
};

const myChoise2 = () => {
    console.log(`→ → → → ${document.body.querySelector('#selecter').value} ← ← ← ←`);
};

selecter.addEventListener('change', myChoise1);
selecter.addEventListener('change', myChoise2);

remover.addEventListener('click', removeEvent = () => {
    input.removeEventListener('focus', focusPocus1);
    input.removeEventListener('focus', focusPocus2);
    clicker.removeEventListener('click', clickLog1);
    clicker.removeEventListener('click', clickLog2);
    selecter.removeEventListener('change', myChoise1);
    selecter.removeEventListener('change', myChoise2);
    document.body.style.backgroundColor = 'darkred';
});
