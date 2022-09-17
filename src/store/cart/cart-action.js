import {createAction} from '../../utils/create-action.utils';
import {CART_ACTION_TYPES} from './cart-types';

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


export const setHideDropdown = bool =>
    createAction(CART_ACTION_TYPES.SET_HIDE_DROPDOWN, bool);

export const addItemToCart = (cartItems, productToAdd) =>
    createAction(
        CART_ACTION_TYPES.SET_CART_ITEMS,
        addCartItem(cartItems, productToAdd)
    );


export const removeItemFromCart = (cartItems, productToRemove) =>
    createAction(
        CART_ACTION_TYPES.SET_CART_ITEMS,
        removeCartItem(cartItems, productToRemove)
    );

export const clearItemFromCart = (cartItems, productToClear) =>
    createAction(
        CART_ACTION_TYPES.SET_CART_ITEMS,
        clearCartItem(cartItems, productToClear)
    );