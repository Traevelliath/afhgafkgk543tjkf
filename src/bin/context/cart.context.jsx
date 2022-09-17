import { createContext, useReducer } from 'react';
import {createAction} from '../utils/create-action.utils';

export const CartContext = createContext({
    hideDropdown: true,
    setHideDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartTotalCount: 0,
    cartTotalCost: 0
});

const addCartItem = (cartItems, productToAdd) => {
    const doesExist = cartItems.find(item => item.id === productToAdd.id);

    if (doesExist) return cartItems.map(item => {
        return item.id === productToAdd.id ?
            {...item, quantity: item.quantity + 1} :
            item
    });

    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, productToRemove) => {
    const doesExist = cartItems.find(item => item.id === productToRemove.id);

    if (doesExist.quantity === 1) return cartItems.filter(item => !(item.id === productToRemove.id));

    if (doesExist) return cartItems.map(item => {
        return item.id === productToRemove.id ?
            {...item, quantity: item.quantity - 1} :
            item
    });
}

const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter(item => !(item.id === productToClear.id));
}

export const CART_ACTION_TYPES = {
    SET_HIDE_DROPDOWN: 'SET_HIDE_DROPDOWN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
}

const INITIAL_VALUES = {
    cartItems: [],
    hideDropdown: true,
    cartTotalCount: 0,
    cartTotalCost: 0
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_HIDE_DROPDOWN:
            return {
                ...state,
                hideDropdown: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in cartReducer function`)
    }
}

export const CartProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(cartReducer, INITIAL_VALUES);
    const { cartItems, hideDropdown, cartTotalCount, cartTotalCost } = state;

    const setHideDropdown = (value) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_HIDE_DROPDOWN, value))
    }

    const updateCartItemsReducer = (newCartItems) => {
        const newCartTotalCount = newCartItems.reduce((acc, item) => acc + item.quantity, 0);
        const newCartTotalCost = newCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

        dispatch(createAction(
            CART_ACTION_TYPES.SET_CART_ITEMS,
            {
                cartItems: newCartItems,
                cartTotalCount: newCartTotalCount,
                cartTotalCost: newCartTotalCost
            })
        )
    }

    const addItemToCart = productToAdd => {
        updateCartItemsReducer(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = productToRemove => {
        updateCartItemsReducer(removeCartItem(cartItems, productToRemove));
    }

    const clearItemFromCart = productToClear => {
        updateCartItemsReducer(clearCartItem(cartItems, productToClear));
    }

    const value = { hideDropdown,
                    setHideDropdown,
                    cartItems,
                    addItemToCart,
                    cartTotalCount,
                    removeItemFromCart,
                    clearItemFromCart,
                    cartTotalCost }

    // noinspection JSValidateTypes
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}