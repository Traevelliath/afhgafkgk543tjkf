import ButtonComponent from '../button/button.component';
import {addItemToCart} from '../../store/cart/cart-action';
import {useDispatch, useSelector} from 'react-redux';
import {selectCartItems} from '../../store/cart/cart-selector';

const ProductCardComponent = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { name, price, imageUrl } = product;

    const moveToCart = () =>
        dispatch((addItemToCart(cartItems, product)));

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <ButtonComponent type='inverted' onClick={moveToCart}>Add to Cart</ButtonComponent>
        </div>
    )
}

export default ProductCardComponent