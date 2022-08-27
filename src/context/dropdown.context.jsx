import {createContext, useEffect, useState} from 'react';

const addCartItem = (cartItems, productToAdd) => {
    const doesExist = cartItems.find(item => item.id === productToAdd.id);

    if (doesExist) return cartItems.map(item => {
        return item.id === productToAdd.id ?
            {...item, quantity: item.quantity + 1} :
            item
    });

    return [...cartItems, {...productToAdd, quantity: 1}]
}


export const DropdownContext = createContext({
    hideDropdown: true,
    setHideDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {}
});

export const DropdownProvider = ({ children }) => {
    const [ hideDropdown, setHideDropdown ] = useState(true);
    const [ cartItems, setCartItems ] = useState([]);
    const [ cartCount, setCartCount ] = useState(0);

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.quantity, 0)
        setCartCount(total)
    }, [cartItems])

    const addItemToCart = productToAdd => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = { hideDropdown, setHideDropdown, cartItems, addItemToCart, cartCount }

    return (
        <DropdownContext.Provider value={value}>
            {children}
        </DropdownContext.Provider>
    )
}