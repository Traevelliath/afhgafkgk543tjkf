import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from '../../assets/logo.svg';
import './navigation.styles.scss'

const NavigationComponent = () => {
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
                    <Link className='navlink' to='/auth'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavigationComponent