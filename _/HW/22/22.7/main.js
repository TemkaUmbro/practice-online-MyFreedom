// 7* - 2 дива, один внешний, один внутренний, оба подписаны на события клика, при нажатии на внутренний при помощи stopPropagation прекращаем всплытие, в результате чего обработчик, повешенный на внешний див, не будет вызван

document.querySelector('.outer').addEventListener('click', () => {
    console.log('Outer');
})

document.querySelector('.inner').addEventListener('click', (evt) => {
    evt.stopPropagation();
    console.log('Inner');
})