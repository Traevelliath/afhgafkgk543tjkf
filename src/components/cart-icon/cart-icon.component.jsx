import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartIconComponent = () => {
    const { hideDropdown, setHideDropdown, cartCount } = useContext(CartContext);

    const setDropdown = () => setHideDropdown(!hideDropdown);

    return (
        <div className='cart-icon-container' onClick={setDropdown}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIconComponent