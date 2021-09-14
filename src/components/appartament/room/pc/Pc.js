import React from 'react';
import PropTypes from 'prop-types';
import './Pc.css';

function PcType({ pc }) {
    return <div>- {pc} Gaming PC</div>;
}

function Pc() {
    return (
        <div className='pc'>
            <PcType pc={ 1 } />
        </div>
    );
}

PcType.propTypes = {
    pc: PropTypes.number,
};

export default Pc;
