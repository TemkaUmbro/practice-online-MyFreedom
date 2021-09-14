import React, { useContext, useState } from 'react';
import style from '../CounterViaContextAndClasses.module.scss';
import CounterContex from '../CounterContext';
import MyInput from '../../../../UI/input/Input';
import MyButton from '../../../../UI/button/MyButton';

const CounterButtons = () => {
    const contextState = useContext(CounterContex);
    const { counter, age, btnDecrementAsync, btnIncrementAsync, btnIncrementAge, btnDecrementAge, btnMultiplierAsync } = contextState;
    const [state, setState] = useState({ multiplier: '', seconds: '' });

    const onSecondsChange = (evt) => {
        setState({ ...state, seconds: evt.target.value });
    }
    const onMultiplyChange = (evt) => {
        setState({ ...state, multiplier: evt.target.value });
    }

    return (
        <div>
            <div className={style.counter}>
                <button className={style.operators} onClick={btnDecrementAsync.bind(null, 2)}>
                Async -2
                </button>
                <button className={style.operators} onClick={btnDecrementAsync.bind(null, 1)}>
                Async -1
                </button>
                {counter}
                <button className={style.operators} onClick={() => { btnIncrementAsync(); }}>
                Async +1
                </button>
                <button className={style.operators} onClick={() => { btnIncrementAsync(2); }}>
                Async +2
                </button>
            </div>
            <div className={style.counter}>
                <button className={style.operators} onClick={btnDecrementAge}> -1 </button>
                Age: {age}
                <button className={style.operators} onClick={btnIncrementAge}> +1 </button>
            </div>
                <MyInput type='text' onChange={onMultiplyChange} value={state.multiplier || ''} placeholder=' Enter a multiplier'></MyInput>
                <MyInput type='text' onChange={onSecondsChange} value={state.seconds || ''} placeholder=' Enter seconds'></MyInput>
                <MyButton className={style.operators} onClick={btnMultiplierAsync}>Multiply</MyButton>
        </div>
    );
}

export default CounterButtons;
