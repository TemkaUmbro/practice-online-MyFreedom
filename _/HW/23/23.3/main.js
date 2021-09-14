import { ColoredClock } from './coloredClock.js';
import { Clock } from './clock.js';

const clockObj = new Clock({
    element: document.querySelector('.clock'),
});
clockObj.clockStart();

const clockColor = new ColoredClock({
    element: document.querySelector('.coloredClock'),
}, 'white');
clockColor.clockStart();
