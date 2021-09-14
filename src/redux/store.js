import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers/reducers';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (a) => a;

const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(thunk),
        devtools,
    ),
);

export default store;
