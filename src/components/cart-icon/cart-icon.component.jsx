import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {useDispatch, useSelector} from 'react-redux';
import {selectCartCount, selectHideDropdown} from '../../store/cart/cart-selector';
import {setHideDropdown} from '../../store/cart/cart-action';

const CartIconComponent = () => {
    const dispatch = useDispatch();
    const hideDropdown = useSelector(selectHideDropdown);
    const cartTotalCount = useSelector(selectCartCount);

    const setDropdown = () => dispatch(setHideDropdown(!hideDropdown))

    return (
        <div className='cart-icon-container' onClick={setDropdown}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartTotalCount}</span>
        </div>
    )
}

export default CartIconComponent