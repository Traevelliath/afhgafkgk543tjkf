import {Link, Outlet} from 'react-router-dom';
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIconComponent from '../../components/cart-icon/cart-icon.component';
import CartDropdownComponent from '../../components/cart-dropdown/cart-dropdown.component';

import { Fragment } from 'react';

import { ReactComponent as CrwnLogo } from '../../assets/logo.svg';
import {useSelector} from 'react-redux';
import {userSelector} from '../../store/user/user-selector';
import {selectHideDropdown} from '../../store/cart/cart-selector';

const NavigationComponent = () => {
    const currentUser = useSelector(userSelector)
    const hideDropdown = useSelector(selectHideDropdown)

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo style={{height: 100+'%'}}/>
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