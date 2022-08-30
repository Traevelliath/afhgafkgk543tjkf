import './product-card.styles.scss';
import ButtonComponent from '../button/button.component';
import {useContext} from 'react';
import {CartContext} from '../../context/cart.context';

const ProductCardComponent = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const moveToCart = () => addItemToCart(product);

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <ButtonComponent type='inverted' onClick={moveToCart}>Add to Cart</ButtonComponent>
        </div>
    )
}

export default ProductCardComponent