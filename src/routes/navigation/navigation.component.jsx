import { Outlet, Link } from "react-router-dom";
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIconComponent from '../../components/cart-icon/cart-icon.component';
import CartDropdownComponent from '../../components/cart-dropdown/cart-dropdown.component';

import { Fragment, useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { DropdownContext } from '../../context/dropdown.context';

import { ReactComponent as CrwnLogo } from '../../assets/logo.svg';
import './navigation.styles.scss';

const NavigationComponent = () => {
    const { currentUser } = useContext(UserContext);
    const { hideDropdown } = useContext(DropdownContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='navlinks-container'>
                    <Link className='navlink' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ?
                            <span className='navlink' onClick={signOutUser}>
                                SIGN OUT
                            </span> :
                            <Link className='navlink' to='/auth'>
                                SIGN IN
                            </Link>
                    }
                    <CartIconComponent />
                </div>
                { !hideDropdown && <CartDropdownComponent /> }
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavigationComponent