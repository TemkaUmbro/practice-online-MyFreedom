import React from 'react';
import style from './CounterViaContextAndClasses.module.scss';
import CounterButtons from './CounterButtons/CounterButtons';
import CounterContex from './CounterContext';
import * as actionsCreators from '../../../../redux/actionsCreators';
import { connect } from 'react-redux';

class CounterViaContextAndConnect extends React.Component {
    constructor(props) {
        super(props);
    };

    render(){
        const btnIncrement = () => {
            this.props.increment();
        };

        return <>
            <h1>Counter Via Context And Classes With Store</h1>
            <div>
                <div className={style.container}>
                    <div className={style.counter}>
                    Counter Via jsx: { this.props.counter }
                        <button className={style.operators} onClick={btnIncrement}>
                            increment
                        </button>
                    </div>
                </div>
                <div className={style.container}>
                    <CounterContex.Provider value={{...this.props}}>
                        <CounterButtons />
                    </CounterContex.Provider>
                </div>
            </div>
        </>
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter,
        age: state.age,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: (count) => {
            dispatch(actionsCreators.increment(count));
        },
        btnIncrementAsync: (count) => {
            actionsCreators.incrementAsync(count)(dispatch);
        },
        btnDecrementAsync: (count) => {
            actionsCreators.decrementAsync(count)(dispatch);
        },
        btnIncrementAge: () => {
            dispatch(actionsCreators.incrementAge());
        },
        btnDecrementAge: () => {
            dispatch(actionsCreators.decrementAge());
        }

        // btnMultiplierAsync: () => {
        //     actionsCreators.multiplierAsync({
        //         multiplier: state.multiplier, seconds: state.seconds
        //     })(dispatch, () => (contextState));
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterViaContextAndConnect);
