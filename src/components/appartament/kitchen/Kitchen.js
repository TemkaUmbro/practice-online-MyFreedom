import React from 'react';
import Refrigerator from './refrigerator/Refrigerator';
import Flower from './flower/Flower';
import Microwave from './microwave/Microwave';
import style from './Kitchen.module.scss';

function Kitchen() {
    return (
        <>
            <h3 className={style.main}>
            My Kitchen:
            </h3>
            <main className={style.list}>
                <Flower myFunc={Refrigerator} myFlowers=': cactus and sansevieria' />
                <Microwave microwave='- Microwave'/>
            </main>
        </>
    );
}

export default Kitchen;
