import { combineReducers } from 'redux'
import ageReducer from './age';
import counterReducer from './counter';
import todoReducer from './todo';
import userUpdater from './user';

export const initialState= {
    counter: 0,
    age: 18,
};

const rootReducers = combineReducers({
    counter: counterReducer,
    age: ageReducer,
    todos: todoReducer,
    user: userUpdater,
});

export default rootReducers;