import { Clock } from './clock.js';

class ColoredClock extends Clock {
    constructor(element, color) {
        super(element);
        this.element.style.color = color;
    }
}

export { ColoredClock };
