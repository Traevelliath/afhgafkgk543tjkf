import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartCost } from '../../store/cart/cart-selector';
import { selectUser } from '../../store/user/user-selector';
import ButtonComponent from '../button/button.component';


const PaymentFormComponent = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartCost) * 100;
    const user = useSelector(selectUser);
    const [ isProcessingPayment, setIsProcessingPayment ] = useState(false);


    const paymentHandler = async (event) => {
        event.preventDefault();

        if ( !stripe || !elements ) return;

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount })
        }).then(res => res.json());

        const { paymentIntent: { client_secret } } = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: user.displayName || 'Guest',
                }
            }
        });

        setIsProcessingPayment(false);

        if ( paymentResult.error ) alert(paymentResult.error);
        if ( paymentResult.paymentIntent.status === 'succeeded' ) alert('Payment successful');
    };

    return (
        <div onSubmit={ paymentHandler }>
            <CardElement/>
            <ButtonComponent
                isLoading={ isProcessingPayment }
                onClick={ paymentHandler }>
                Pay now
            </ButtonComponent>
        </div>
    );
};

export default PaymentFormComponent;