import SpinnerComponent from '../spinner/spinner.component';
import './button.styles.scss';


const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
};

const ButtonComponent = ({ children, buttonType, isLoading, ...otherProps }) => {
    return <button disabled={ isLoading }
                   className={ `button-container ${ BUTTON_TYPE_CLASSES[buttonType] }` }
                   { ...otherProps }>
        { isLoading ?
            <SpinnerComponent props='button'/> :
            children }
    </button>;
};

export default ButtonComponent;