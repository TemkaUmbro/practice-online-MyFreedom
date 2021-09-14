import React from 'react';
import style from './Counter.module.scss';
import { Provider } from 'react-redux';
import CounterButtons from './CounterButtons/CounterButtons';
import store from '../../../../redux/store';
import { increment, addTodo, updateUser } from '../../../../redux/actionsCreators';

class СounterViaClass extends React.Component {
    componentDidMount() {
        const setLocalState = () => {
            const state = store.getState();
            console.log(state);
            this.setState({ ...this.state, counter: state.counter });
        }
        setLocalState();
        store.subscribe(() => setLocalState());
    };

    componentWillUnmount() {
        console.log('unmount');
    }

    render() {
        const { counter } = this.state || {};

        const btnIncrement = (count) => store.dispatch(increment(count));
        const btnAddTodo = () => store.dispatch(addTodo());
        const btnUserUpdater = () => store.dispatch(updateUser());

        return (
            <>
                <h1>Сounter Via Class</h1>
                <div className={style.container}>
                    <div className={style.counter}>
                        Counter jsx: { counter || 0 }
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
}

export default СounterViaClass;
