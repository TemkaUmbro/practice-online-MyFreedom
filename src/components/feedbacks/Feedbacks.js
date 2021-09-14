import React, { useState, useContext } from 'react';
import Feedback from './feedback/Feedback';
import style from './Feedbacks.module.scss';
import { ThemeContext } from '../../utils/ThemeContext';

function errorBorder(el) {
    return el.classList.add(`${style.redBorder}`);
}

function Feedbacks() {
    const [feedbacks, setFeedbacks] = useState(JSON.parse(localStorage.getItem('feedbacks')) || []);

    const onSubmit = (evt) => {
        evt.preventDefault();
        const data = new FormData(evt.target);
        const name = data.get('name');
        const feedback = data.get('feedback');
        const updatedFeedbacks = [...feedbacks, { name, feedback }];
        const nameColor = evt.target.elements.name;
        const feedbackColor = evt.target.elements.feedback;

        if (!nameColor.value) {
            errorBorder(nameColor);
        } else {
            nameColor.classList.remove(`${style.redBorder}`);
        }

        if (!feedbackColor.value) {
            errorBorder(feedbackColor);
        } else {
            feedbackColor.classList.remove(`${style.redBorder}`);
        }

        if (nameColor.value && feedbackColor.value) {
            setFeedbacks(updatedFeedbacks);
            localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));
            nameColor.value = '';
            feedbackColor.value = '';
        }
    };

    const context = useContext(ThemeContext);

    return (
        <div className={style[context]}>
            <h1 className={style.feedback}>Feedbacks</h1>
            <div>
                <form className={style.formFeedback} onSubmit={onSubmit}>
                    <div>
                        <div>Your name:</div>
                        <input className={style.inputFeedback} name='name' placeholder=' your name'></input>
                    </div>
                    <div>
                        <div>Your feedback:</div>
                        <input className={style.inputFeedback} name='feedback' placeholder=' feedback'></input>
                    </div>
                    <button className={style.buttonFeedback} type='submit'>Add</button>
                </form>
            </div>
            <div className={style.feedbackList}>
                { feedbacks.map((item, i) => <div key={i}>
                    <Feedback name={item.name} feedback={item.feedback} />
                </div>)}
            </div>
        </div>
    );
}

export default Feedbacks;
