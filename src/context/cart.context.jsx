import { createContext, useEffect, useState } from 'react';

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


export const CartContext = createContext({
    hideDropdown: true,
    setHideDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {}
});

export const CartProvider = ({ children }) => {
    const [ hideDropdown, setHideDropdown ] = useState(true);
    const [ cartItems, setCartItems ] = useState([]);
    const [ cartCount, setCartCount ] = useState(0);
    const [ cartTotalCost, setCartTotalCost ] = useState(0);

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        setCartCount(total);
    }, [cartItems])

    useEffect(() => {
        const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setCartTotalCost(totalCost);
    }, [cartItems])

    const addItemToCart = productToAdd => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = productToRemove => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const clearItemFromCart = productToDelete => {
        setCartItems(clearCartItem(cartItems, productToDelete));
    }

    const value = { hideDropdown,
                    setHideDropdown,
                    cartItems,
                    addItemToCart,
                    cartCount,
                    removeItemFromCart,
                    clearItemFromCart,
                    cartTotalCost
    }

    // noinspection JSValidateTypes
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}