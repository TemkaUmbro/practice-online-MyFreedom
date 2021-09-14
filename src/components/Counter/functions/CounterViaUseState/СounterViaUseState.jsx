import React, { useState } from 'react';
import style from './CounterViaUseState.module.scss';
import CounterButtons from './CounterButtons/CounterButtons';
import { initialState } from '../../../../redux/reducers/reducers';

function СounterViaUseState() {
    const [state, setState] = useState(initialState);
    const { counter } = state;

    const increment = (count) => {
        setState({ ...state, counter: state.counter + (count || 1)});
    };
    const btnIncrement = () => {
        increment();
    };
    const multiplyAsync = ({ seconds, multiplier }) => {
        setTimeout(() => {
            setState({ ...state, counter: state.counter * (multiplier || 0) });
        }, seconds * 1000);
    };
    const incrementAsync = (count) => {
        setTimeout(() => {
            setState({ ...state, counter: state.counter + (count || 1) });
        }, 1000);
    };
    const decrementAsync = (count) => {
        setTimeout(() => {
            setState({ ...state, counter: state.counter - (count || 1) });
        }, 1000);
    };
    const incrementAge = () => {
        setState({ ...state, age: state.age + 1 });
    };
    const decrementAge = () => {
        setState({ ...state, age: state.age - 1 });
    };

    return (
        <>
            <h1>Counter Via UseState</h1>
            <div>
                <div className={style.container}>
                    <div className={style.counter}>
                    Counter Via jsx: { counter }
                        <button className={style.operators} onClick={btnIncrement}>
                            increment
                        </button>
                    </div>
                </div>
                <div className={style.container}>
                        <CounterButtons
                        {...state}
                        incrementAsync={incrementAsync}
                        decrementAsync={decrementAsync}
                        incrementAge={incrementAge}
                        decrementAge={decrementAge}
                        multiplyAsync={multiplyAsync}
                        />
                </div>
            </div>
        </>
    );
}

export default СounterViaUseState;
