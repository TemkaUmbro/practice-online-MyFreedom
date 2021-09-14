// 8* - Реализовать п.1 через setTimeout

const clock = document.querySelector('.clock');

const logSeconds = () => {
    const clockValue = `${new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours()}:${new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}:${new Date().getSeconds() < 10 ? `0${new Date().getSeconds()}` : new Date().getSeconds()}`;
    clock.innerHTML = clockValue;
};

const currentInterval = setTimeout(function start() {
    logSeconds();
    setTimeout(start, 1000);
}, 1000);

setTimeout(() => {
    clearInterval(currentInterval);
}, 100000);
