import actionTypes from "../actionTypes";

export const userUpdater = (state = {}, action = '') => {
    switch (action.type) {
        case actionTypes.user.UPDATE:
            return { ...state, country: 'Belarus'  };
        default:
            return state;
    }
}

export default userUpdater;