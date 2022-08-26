import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { DropdownContext } from '../../context/dropdown.context';

const CartIconComponent = () => {
    const { hideDropdown, setHideDropdown } = useContext(DropdownContext);

    const setDropdown = () => setHideDropdown(!hideDropdown);

    return (
        <div className='cart-icon-container' onClick={setDropdown}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIconComponent