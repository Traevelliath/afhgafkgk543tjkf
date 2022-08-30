import './checkout-header.styles.scss';

const CheckoutHeaderComponent = ({ header }) => {
    return (
        <div className='header-block'>
            <span>{header}</span>
        </div>
    )
}

export default CheckoutHeaderComponent