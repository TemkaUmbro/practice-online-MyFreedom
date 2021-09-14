import React from 'react';
import PropTypes from 'prop-types';
import './Microwave.css';

function Microwave({ microwave }) {
    return (
        <div className='microwave'>
            { microwave }
        </div>
    );
}

Microwave.propTypes = {
    microwave: PropTypes.node.isRequired,
};

export default Microwave;
