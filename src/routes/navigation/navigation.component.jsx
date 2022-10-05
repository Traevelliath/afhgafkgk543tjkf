import { Link, Outlet } from 'react-router-dom';
import { signOutStart } from '../../store/user/user-actions';
import CartIconComponent from '../../components/cart-icon/cart-icon.component';
import CartDropdownComponent from '../../components/cart-dropdown/cart-dropdown.component';

import { Fragment } from 'react';

import { ReactComponent as CrwnLogo } from '../../assets/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../store/user/user-selector';
import { selectHideDropdown } from '../../store/cart/cart-selector';

import './navigation.styles.scss';


const NavigationComponent = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectUser);
    const hideDropdown = useSelector(selectHideDropdown);

    const signOutUser = () => dispatch(signOutStart());

    return (
        <Fragment>
            <header>
                <div className='container navigation'>
                    <Link className='logo-container' to='/'>
                        <CrwnLogo/>
                    </Link>
                    <div className='navlinks-container'>
                        <Link className='navlink' to='/shop'>
                            SHOP
                        </Link>
                        {
                            currentUser ?
                                <span className='navlink' onClick={ signOutUser }>
                                    SIGN OUT
                                </span> :
                                <Link className='navlink' to='/auth'>
                                    SIGN IN
                                </Link>
                        }
                        <CartIconComponent/>
                    </div>
                    { !hideDropdown && <CartDropdownComponent/> }
                </div>
            </header>
            <Outlet/>
        </Fragment>
    );
};

export default NavigationComponent;