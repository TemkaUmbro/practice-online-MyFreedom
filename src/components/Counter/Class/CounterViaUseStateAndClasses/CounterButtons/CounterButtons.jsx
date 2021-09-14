import React from 'react';
import MyInput from '../../../../UI/input/Input';
import MyButton from '../../../../UI/button/MyButton';
import style from '../CounterViaClasses.module.scss';

class CounterButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            multiplier: '',
            seconds: ''
        };
    };

    btnIncrementAge = () => {
        this.props.incrementAge();
    };
    btnDecrementAge = () => {
        this.props.decrementAge();
    };
    btnIncrementAsync = (count) => {
        this.props.incrementAsync(count);
    };
    btnDecrementAsync = (count) => {
        this.props.decrementAsync(count);
    };

    onMultiplyChange = (e) => {
        this.setState({ multiplier: e.target.value });
    };
    onSecondsChange = (e) => {
        this.setState({ seconds: e.target.value });
    };
    btnMultiplierAsync = (state) => {
        this.props.multiplyAsync({ ...state, seconds: this.state.seconds, multiplier: this.state.multiplier });
    };

    render() {
        return (
            <div>
                <div className={style.counter}>
                    <button className={style.operators} onClick={this.btnDecrementAsync.bind(null, 2)}>Async -2</button>
                    <button className={style.operators} onClick={this.btnDecrementAsync.bind(null, 1)}>Async -1</button>
                    {this.props.counter}
                    <button className={style.operators} onClick={() => {this.btnIncrementAsync()}}>Async +1</button>
                    <button className={style.operators} onClick={() => {this.btnIncrementAsync(2)}}>Async +2</button>
                </div>
                <div className={style.counter}>
                    <button className={style.operators} onClick={this.btnDecrementAge}>-1</button>
                    Age: {this.props.age}
                    <button className={style.operators} onClick={this.btnIncrementAge}>+1</button>
                </div>
                    <MyInput type='text' onChange={this.onMultiplyChange} value={this.state.multiplier} placeholder=' Enter a multiplier'></MyInput>
                    <MyInput type='text' onChange={this.onSecondsChange} value={this.state.seconds} placeholder=' Enter seconds'></MyInput>
                    <MyButton className={style.operators} onClick={this.btnMultiplierAsync}>Multiply</MyButton>
            </div>
        );
    }

}

export default CounterButtons;
