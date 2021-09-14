import actionTypes from './actionTypes';

export const increment = (count) => ({ type: actionTypes.counter.INCREMENT, payload: count || 1 });
export const decrement = (count) => ({ type: actionTypes.counter.DECREMENT, payload: count || 1 });
export const decrement1 = () => ({ type: actionTypes.counter.DECREMENT1 });
export const incrementAge = () => ({ type: actionTypes.age.INCREMENT });
export const decrementAge = () => ({ type: actionTypes.age.DECREMENT });
export const addTodo = () => ({ type: actionTypes.todos.ADD });
export const updateUser = () => ({ type: actionTypes.user.UPDATE });
export const multiply = (value) => ({ type: actionTypes.counter.MULTIPLY, payload: value });

export const incrementAsync = (count) => (dispatch) => {
    setTimeout(() => {
        dispatch(increment(count));
    }, 1000);
};

export const decrementAsync = (count) => (dispatch) => {
    setTimeout(() => {
        dispatch(decrement(count));
    }, 1000);
};

export const multiplierAsync = ({ multiplier, seconds }) => (dispatch, getState) => {
    const { counter } = getState();
    setTimeout(() => {
        dispatch(multiply(counter * multiplier));
    }, seconds * 1000);
};
