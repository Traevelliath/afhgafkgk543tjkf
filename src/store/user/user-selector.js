import { createSelector } from 'reselect';


export const selectUserReducer = state => state.user

export const selectUser = createSelector(
    [selectUserReducer],
    userData => userData.currentUser
)