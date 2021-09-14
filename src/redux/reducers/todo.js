import actionTypes from "../actionTypes";

export const todoReducer = (state = [], action = '') => {
    switch (action.type) {
        case actionTypes.todos.ADD:
            return [ ...state, { id: 123 } ];
        default:
            return state;
    }
}

export default todoReducer;