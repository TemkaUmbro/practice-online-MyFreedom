import React from 'react';
import PropTypes from 'prop-types';
import './Bed.css';

// eslint-disable-next-line no-unused-vars
function BedType({ bed }) {
    return <div>- { bed }</div>;
}

function Bed() {
    return (
        <div className='bed'>
            <BedType bed={ ['Bed'] } />
        </div>
    );
}

BedType.propTypes = {
    bed: PropTypes.array,
};

export default Bed;
