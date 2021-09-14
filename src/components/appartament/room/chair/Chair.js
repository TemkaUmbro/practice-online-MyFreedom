import React from 'react';
import PropTypes from 'prop-types';
import './Chair.css';

function ChairsType({ chair }) {
    return <div>- Office Chair{ chair }</div>;
}

function Chairs() {
    return (
        <div className='chair'>
            <ChairsType chair={ true } />
        </div>
    );
}

ChairsType.propTypes = {
    chair: PropTypes.bool,
};

export default Chairs;
