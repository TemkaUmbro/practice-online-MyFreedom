import actionTypes from "../actionTypes";

export const ageReducer = (state = 18, action = '') => {
    switch (action.type) {
        case actionTypes.age.INCREMENT:
            return  state + 1;
        case actionTypes.age.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

export default ageReducer;