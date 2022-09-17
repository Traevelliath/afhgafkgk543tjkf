import {CART_ACTION_TYPES} from './cart-types';

export const CART_INITIAL_VALUES = {
    cartItems: [],
    hideDropdown: true,
}

export const cartReducer = (state = CART_INITIAL_VALUES, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload
            };
        case CART_ACTION_TYPES.SET_HIDE_DROPDOWN:
            return {
                ...state,
                hideDropdown: payload
            };
        default:
            return state;
    }
}