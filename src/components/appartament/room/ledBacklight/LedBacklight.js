import React from 'react';
import PropTypes from 'prop-types';

function LedBacklightType({ color }) {
    return <div>- { color }</div>;
}
function LedBacklight() {
    return (
        <div className="LedBacklight">
            <header className="LedBacklight-header">
                <div>
                    <LedBacklightType color={ 'RGB LedBacklight' }/>
                </div>
            </header>
        </div>
    );
}

LedBacklightType.propTypes = {
    color: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

export default LedBacklight;
