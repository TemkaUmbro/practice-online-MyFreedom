import React, { useState } from 'react';
import MyInput from '../../../../UI/input/Input';
import MyButton from '../../../../UI/button/MyButton';
import style from '../CounterViaUseState.module.scss';

function CounterButtons({ counter, age, incrementAsync, decrementAsync, incrementAge, decrementAge, multiplyAsync }) {

    const [state, setState] = useState({});

    const btnDecrementAge = () => {
        decrementAge();
    };
    const btnIncrementAge = () => {
        incrementAge();
    };
    const btnIncrementAsync = (count) => {
        incrementAsync(count);
    };
    const btnDecrementAsync = (count) => {
        decrementAsync(count);
    };
    const onMultiplyChange = (e) => {
        setState({ ...state, multiplier: e.target.value });
    };
    const onSecondsChange = (e) => {
        setState({ ...state, seconds: e.target.value });
    };
    const btnMultiplierAsync = () => {
        multiplyAsync({ ...state, seconds: state.seconds, multiplier: state.multiplier });
    };

    return (
        <div>
            <div className={style.counter}>
                <button className={style.operators} onClick={btnDecrementAsync.bind(null, 2)}>Async -2 </button>
                <button className={style.operators} onClick={btnDecrementAsync.bind(null, 1)}>Async -1 </button>
                {counter}
                <button className={style.operators} onClick={() => {btnIncrementAsync()}}>Async +1 </button>
                <button className={style.operators} onClick={() => {btnIncrementAsync(2)}}>Async +2 </button>
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
