import React from 'react';
import Room from './room/Room';
import Kitchen from './kitchen/Kitchen';
import './Appartment.scss';

function Appartment({ children }) {
    return (
        <div className='App h1'>
            <h2>
            My Appartamens:
            </h2>
            <Room />
            <Kitchen />
            { children }
        </div>
    );
}

export default Appartment;
