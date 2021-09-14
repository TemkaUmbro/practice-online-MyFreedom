function Clock({ element }) {
    this.element = element;
}

Clock.prototype.updateTime = function() {
    const date = new Date();

    const hours = date.getHours();
    const currentHours = `${hours < 10 ? `0${hours}` : hours}`;

    const minutes = date.getMinutes();
    const currentMinutes = `${minutes < 10 ? `0${minutes}` : minutes}`;

    const seconds = date.getSeconds();
    const currentSeconds = `${seconds < 10 ? `0${seconds}` : seconds}`;

    this.element.innerHTML = `${currentHours}:${currentMinutes}:${currentSeconds}`;
};

Clock.prototype.clockStart = function() {
    setInterval(() => { this.updateTime(); }, 1000);
};

export { Clock };
