import React from 'react';
import style from './CounterViaClasses.module.scss';
import CounterButtons from './CounterButtons/CounterButtons';
import { initialState } from '../../../../redux/reducers/reducers';

class CounterViaUseStateandClasses extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    render() {
        const increment = (count) => {
            this.setState({ ...this.state, counter: this.state.counter + (count || 1)});
        };
        const btnIncrement = () => {
            increment();
        };
        const multiplyAsync = ({ seconds, multiplier }) => {
            setTimeout(() => {
                this.setState({ ...this.state, counter: this.state.counter * (multiplier || 0) });
            }, seconds * 1000);
        };
        const incrementAsync = (count) => {
            setTimeout(() => {
                this.setState({ ...this.state, counter: this.state.counter + (count || 1) });
            }, 1000);
        };
        const decrementAsync = (count) => {
            setTimeout(() => {
                this.setState({ ...this.state, counter: this.state.counter - (count || 1) });
            }, 1000);
        };
        const incrementAge = () => {
            this.setState({ ...this.state, age: this.state.age + 1 });
        };
        const decrementAge = () => {
            this.setState({ ...this.state, age: this.state.age - 1 });
        };

        return (
            <>
                <h1>Counter Via UseState And Classes</h1>
                <div>
                    <div className={style.container}>
                        <div className={style.counter}>
                        Counter Via jsx: { this.state.counter }
                            <button className={style.operators} onClick={btnIncrement}>
                                increment
                            </button>
                        </div>
                    </div>
                    <div className={style.container}>
                            <CounterButtons
                            {...this.state}
                            multiplyAsync={multiplyAsync}
                            incrementAsync={incrementAsync}
                            decrementAsync={decrementAsync}
                            incrementAge={incrementAge}
                            decrementAge={decrementAge}
                            />
                    </div>
                </div>
            </>
        );
    }
}

export default CounterViaUseStateandClasses;
