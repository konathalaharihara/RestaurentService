import { UserActionTypes } from './user.types.js'

// reducer.js
const initialState = {
    user: null,
    error: null,
    isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };
        case UserActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default userReducer;
