import actionTypes from "../actionTypes";

export const counterReducer = (state =  0, action = '') => {
    switch (action.type) {
        case actionTypes.counter.INCREMENT:
            return state + (action.payload || 1);
        case actionTypes.counter.DECREMENT:
            return state - (action.payload || 1);
        case actionTypes.counter.MULTIPLY:
            return action.payload;
        default:
            return state;
    }
}

export default counterReducer;