import actionTypes from "./actionTypes";

export const initialState = {
    counter: 1,
    age: 18,
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return { ...state, counter: state.counter + (action.payload || 1) };
        case actionTypes.DECREMENT:
            return { ...state, counter: state.counter - (action.payload || 1) };
        case actionTypes.INCREMENT_AGE:
            return { ...state, age: state.age + 1 };
        case actionTypes.DECREMENT_AGE:
            return { ...state, age: state.age - 1 };
        case actionTypes.MULTIPLY:
            return { ...state, counter: action.payload };
        default:
            return { ...state };
    }
}

export default counterReducer;