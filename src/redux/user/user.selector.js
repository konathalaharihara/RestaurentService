import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectLoginUser = createSelector(
    [selectUser],
    state => state.user
)

export const selectLoginError = createSelector(
    [selectUser],
    state => state.error
)

