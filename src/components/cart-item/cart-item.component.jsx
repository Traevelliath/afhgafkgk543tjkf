import {clearItemFromCart} from '../../store/cart/cart-action';
import {useDispatch, useSelector} from 'react-redux';
import { selectCartItems } from '../../store/cart/cart-selector';

const CartItemComponent = ({ cartItem }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    const { name, imageUrl, price, quantity } = cartItem;

    const clearFromCart = () =>
        dispatch(clearItemFromCart(cartItems, cartItem))

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={name}/>
            <div className='item-details'>
                <h2 className='name'>{name}</h2>
                <span className='price'>{quantity} x ${price}</span>
            </div>
            <div className='remove-button-dropdown' onClick={clearFromCart}>&#10005;</div>
        </div>
    )
}

export default CartItemComponent