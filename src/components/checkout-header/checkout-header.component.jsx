import './checkout-header.styles.scss';


const CheckoutHeaderComponent = ({ header }) => {
    return (
        <div className='header-block'>
            { header }
        </div>
    );
};

export default CheckoutHeaderComponent;