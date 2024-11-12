import { UserActionTypes } from './user.types.js'

export const loginSuccess = user => ({
    type: UserActionTypes.LOGIN_SUCCESS,
    payload: user
});

export const loginFailure = error => ({
    type: UserActionTypes.LOGIN_FAILURE,
    payload: error
})