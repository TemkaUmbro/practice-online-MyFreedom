import React from 'react';
import { Provider } from 'react-redux';
import CounterViaContextAndConnect from './CounterViaContextAndConnect';
import store from '../../../../redux/store'

class CounterViaContextAndClassesWithStore extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <CounterViaContextAndConnect />
            </Provider>
        );
    }
}

export default CounterViaContextAndClassesWithStore;
