import './cart-dropdown.styles.scss';
import ButtonComponent from '../button/button.component';
import CartItemComponent from '../cart-item/cart-item.component';
import {useContext} from 'react';
import {DropdownContext} from '../../context/dropdown.context';

const CartDropdownComponent = () => {
    const { cartItems } = useContext(DropdownContext)

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
            {cartItems.map(item => <CartItemComponent key={item.id} cartItem={item}/>)}
            </div>
            <ButtonComponent>Go to Checkout</ButtonComponent>
        </div>
    )
}

export default CartDropdownComponent