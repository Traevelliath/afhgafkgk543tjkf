import './checkout.styles.scss';
import CheckoutItemComponent from '../../components/checkout-item/checkout-item.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import CheckoutHeaderComponent from '../../components/checkout-header/checkout-header.component';

const checkoutHeaders = [
    'product',
    'description',
    'quantity',
    'price',
    'remove'
]

const CheckoutComponent = () => {
    const { cartItems, cartTotalCost } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                {checkoutHeaders.map(header => <CheckoutHeaderComponent
                    key={ checkoutHeaders.indexOf(header) }
                    header={ header }
                />)}
            </div>
            {
                !(cartItems.length === 0) ?
                    cartItems.map(item => <CheckoutItemComponent key={item.id} cartItem={ item } />) :
                    <div className='empty-cart-header'>
                        Cart is empty...
                    </div>
            }
            <span className='total'>Total Cost: ${cartTotalCost}</span>
        </div>
    )
}

export default CheckoutComponent