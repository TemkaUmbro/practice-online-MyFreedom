import React, { useState, useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import style from './Counter.module.scss';
import CounterButtons from './CounterButtons/CounterButtons';
import { decrement, increment, decrement1, addTodo, updateUser } from '../../../../redux/actionsCreators';
import store from '../../../../redux/store';
import { useUnmount } from '../../../Hooks/useUnmount';

function CounterViaFunctions() {
    const [counter, setCounter] = useState('0');
    const [isStoreSubsribed, setStoreSubsribed] = useState(false);

    const refToUnsubscribe = useRef(null);

    useEffect(() => {
        if (!isStoreSubsribed) {
            refToUnsubscribe.current = store.subscribe(() => {
                const state = store.getState();
                setCounter(state.counter);
            });

            store.dispatch(increment());
            // 1
            store.dispatch(increment(3));
            // 4
            store.dispatch(decrement());
            // 3
            store.dispatch(decrement1());
            // 3

            setStoreSubsribed(true);
        }
    }, [isStoreSubsribed, setStoreSubsribed]);

    const btnIncrement = (count) => store.dispatch(increment(count));
    const btnAddTodo = () => store.dispatch(addTodo());
    const btnUserUpdater = () => store.dispatch(updateUser());
    const onComponentUnmount = () => {
        if (refToUnsubscribe.current) {
            refToUnsubscribe.current();
        }
    };

    useUnmount(onComponentUnmount);

    return (
        <>
            <h1>Counter Via Functions</h1>
            <div className={style.container}>
                <div className={style.counter}>
                    Counter jsx: { counter }
                    <button className={style.operators} onClick={btnIncrement.bind(null, 1)}>
                        increment
                    </button>
                    <button className={style.operators} onClick={ btnAddTodo }>
                        Add Todo
                    </button>
                    <button className={style.operators} onClick={ btnUserUpdater }>
                     Update User
                    </button>
                </div>
            </div>
            <div className={style.container}>
                <Provider store={store}>
                    <CounterButtons />
                </Provider>
            </div>
        </>
    );
}

export default CounterViaFunctions;
