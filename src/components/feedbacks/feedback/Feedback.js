// import React from 'react';
import style from '../Feedbacks.module.scss';

function Feedback({ name, feedback }) {
    return (
        <div className={style.feedbacks}>
            <h3>{name}</h3>
            <div>"{feedback}"</div>
        </div>
    );
}

export default Feedback;
