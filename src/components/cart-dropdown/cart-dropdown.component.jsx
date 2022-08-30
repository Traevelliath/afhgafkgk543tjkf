import './cart-dropdown.styles.scss';
import ButtonComponent from '../button/button.component';
import CartItemComponent from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';

const CartDropdownComponent = () => {
    const { hideDropdown, setHideDropdown, cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
        setHideDropdown(!hideDropdown);
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItemComponent key={item.id} cartItem={item}/>)}
            </div>
            <ButtonComponent onClick={goToCheckoutHandler}>Go to Checkout</ButtonComponent>
        </div>
    )
}

export default CartDropdownComponent