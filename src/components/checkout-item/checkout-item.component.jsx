import {useContext} from 'react';
import {CartContext} from '../../context/cart.context';
import './checkout-item.styles.scss'


const CheckoutItemComponent = ( {cartItem} ) => {
    const { name, price, imageUrl, quantity } = cartItem;
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const clearFromCart = () => clearItemFromCart(cartItem);

    const addItem = () => addItemToCart(cartItem);
    const removeItem = () => removeItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <span className='arrow' onClick={removeItem}>&#10094;</span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={addItem}>&#10095;</span>
            </div>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearFromCart}>&#10005;</div>
        </div>
    )
}

export default CheckoutItemComponent