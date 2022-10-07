import { createSelector } from 'reselect';


const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector(
    [ selectCartReducer ],
    cart => cart.cartItems
);

export const selectHideDropdown = createSelector(
    [ selectCartReducer ],
    cart => cart.hideDropdown
);

export const selectCartCount = createSelector(
    [ selectCartItems ],
    cartItems => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartCost = createSelector(
    [ selectCartItems ],
    cartItems => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
);

