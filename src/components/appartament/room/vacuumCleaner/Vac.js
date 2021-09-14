import React from 'react';
import PropTypes from 'prop-types';
import './Vac.css';

function VacType({ vac }) {
    return <div>- { vac }</div>;
}

function Vac() {
    return (
        <div className='vac'>
            <VacType vac={ 'Vacuum Cleaner' }/>
        </div>
    );
}

VacType.propTypes = {
    vac: PropTypes.oneOf(['Vacuum Cleaner', 'Cleaner']),
};

export default Vac;
