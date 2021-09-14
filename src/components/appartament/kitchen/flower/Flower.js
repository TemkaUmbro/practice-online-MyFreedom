import React from 'react';
import PropTypes from 'prop-types';
import './Flower.css';

function Flower({ myFlowers, myFunc }) {
    return (
        <div className='flowers'>
            { myFunc() }
            - Two Flowers
            { myFlowers }
        </div>
    );
}

Flower.propTypes = {
    myFunc: PropTypes.func,
};

export default Flower;
