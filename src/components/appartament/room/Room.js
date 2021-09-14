import Bed from './bed/Bed';
import Chair from './chair/Chair';
import LedBacklight from './ledBacklight/LedBacklight';
import Pc from './pc/Pc';
import Pet from './pet/Pet';
import Vac from './vacuumCleaner/Vac';
import style from './Room.module.css';

function Room() {
    return (
        <div>
            <h3 className={style.h1}>
            My Room:
            </h3>
            <main className={style.room}>
                <Bed />
                <Chair />
                <LedBacklight />
                <Pc />
                <Pet name=' - Kassy' />
                <Vac />
            </main>
        </div>
    );
}

export default Room;
