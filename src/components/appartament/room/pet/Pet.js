import React from 'react';
import PropTypes from 'prop-types';
import './Pet.css';

function Pet({ name }) {
    return (
        <div className='pet'>
            - Cat
            { name }
        </div>
    );
}

Pet.propTypes = {
    name: PropTypes.string,
};

export default Pet;
