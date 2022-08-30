import './cart-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartItemComponent = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart } = useContext(CartContext);

    const clearFromCart = () => clearItemFromCart(cartItem)

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={name}/>
            <div className='item-details'>
                <h2 className='name'>{name}</h2>
                <span className='price'>{quantity} x ${price}</span>
            </div>
            <div className='remove-button' onClick={clearFromCart}>&#10005;</div>
        </div>
    )
}

export default CartItemComponent