import { USER_ACTION_TYPES } from './user-types';


const INITIAL_VALUE = {
    currentUser: null,
    isLoading: false,
    error: null
};

export const userReducer = (state = INITIAL_VALUE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.EMAIL_SING_IN_START:
        case USER_ACTION_TYPES.SIGN_UP_START:
        case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
            return {
                ...state,
                isLoading: true,
            };
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: payload,
                isLoading: false,
            };
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
            return {
                ...state,
                error: payload,
                isLoading: false,
            };
        case USER_ACTION_TYPES.SIGN_OUT:
            return {
                ...state,
                isLoading: false,
                currentUser: null,
            };
        default:
            return state;
    }
};