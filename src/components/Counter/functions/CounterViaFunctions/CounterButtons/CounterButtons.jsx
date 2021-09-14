import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from '../Counter.module.scss';
import * as actionsCreators from '../../../../../redux/actionsCreators';
import MyInput from '../../../../UI/input/Input';
import MyButton from '../../../../UI/button/MyButton';

function CounterButtons() {
    const [state, setState] = useState({ multiplier: '', seconds: '' });
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const age = useSelector((state) => state.age);
    const onMultiplyChange = (evt) => {
        setState({ ...state, multiplier: evt.target.value });
    }
    const onSecondsChange = (evt) => {
        setState({ ...state, seconds: evt.target.value });
    }
    const btnDecrement = (count) => dispatch(actionsCreators.decrement(count));
    const btnIncrement = (count) => dispatch(actionsCreators.increment(count));
    const btnIncrementAsync = (count) => dispatch(actionsCreators.incrementAsync(count));
    const btnDecrementAsync = (count) => dispatch(actionsCreators.decrementAsync(count));
    const btnDecrementAge = () => dispatch(actionsCreators.decrementAge());
    const btnIncrementAge = () => dispatch(actionsCreators.incrementAge());

    return (
        <div>
            <div className={style.counter}>
                <button className={style.operators} onClick={btnDecrementAsync.bind(null, 2)}> Async -2 </button>
                <button className={style.operators} onClick={btnDecrement.bind(null, 1)}> -1 </button>
                {counter}
                <button className={style.operators} onClick={btnIncrement.bind(null, 1)}> +1 </button>
                <button className={style.operators} onClick={btnIncrementAsync.bind(null, 2)}> Async +2 </button>
            </div>
            <div className={style.counter}>
                <button className={style.operators} onClick={btnDecrementAge}> -1 </button>
                Age: {age}
                <button className={style.operators} onClick={btnIncrementAge}> +1 </button>
            </div>
                <MyInput type='text' onChange={onMultiplyChange} value={state.multiplier} placeholder=' Enter a multiplier'></MyInput>
                <MyInput type='text' onChange={onSecondsChange} value={state.seconds} placeholder=' Enter seconds'></MyInput>
                <MyButton className={style.operators} onClick={() => { dispatch(actionsCreators.multiplierAsync({ multiplier: state.multiplier, seconds: state.seconds }))}}>Multiply</MyButton>
        </div>
    );
}

export default CounterButtons;
