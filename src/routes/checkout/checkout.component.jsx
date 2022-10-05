import CheckoutItemComponent from '../../components/checkout-item/checkout-item.component';

import CheckoutHeaderComponent from '../../components/checkout-header/checkout-header.component';
import { useSelector } from 'react-redux';
import PaymentFormComponent from '../../components/payment-form/payment-form.component';
import { selectCartCost, selectCartItems } from '../../store/cart/cart-selector';


const checkoutHeaders = [
    'product',
    'description',
    'quantity',
    'price',
    'remove'
];

const CheckoutComponent = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotalCost = useSelector(selectCartCost);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                { checkoutHeaders.map(header => <CheckoutHeaderComponent
                    key={ checkoutHeaders.indexOf(header) }
                    header={ header }
                />) }
            </div>
            {
                !(cartItems.length === 0) ?
                    cartItems.map(item => <CheckoutItemComponent key={ item.id } cartItem={ item }/>) :
                    <div className='empty-cart-header'>
                        Cart is empty...
                    </div>
            }
            <span className='total'>Total Cost: ${ cartTotalCost }</span>
            <PaymentFormComponent/>
        </div>
    );
};

export default CheckoutComponent;