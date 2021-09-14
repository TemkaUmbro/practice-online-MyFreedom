import React, { useReducer } from 'react';
import style from './CounterViaContext.module.scss';
import CounterButtons from './CounterButtons/CounterButtons';
import CounterContex from './CounterContext';
import rootReducer, { initialState } from '../../../../redux/reducers/reducers';
import * as actionsCreators from '../../../../redux/actionsCreators';

function СounterViaContext() {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    const { counter } = state;

    const increment = (count) => {
        dispatch(actionsCreators.increment(count))
    };

    const btnIncrement = () => {
        increment();
    };

    return (
        <>
            <h1>Counter Via Context</h1>
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
                    <CounterContex.Provider value={{
                        ...state, dispatch
                    }}>
                        <CounterButtons />
                    </CounterContex.Provider>
                </div>
            </div>
        </>
    );
}

export default СounterViaContext;
