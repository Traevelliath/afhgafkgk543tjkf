import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from 'react';
import { ReactComponent as CrwnLogo } from '../../assets/logo.svg';
import './navigation.styles.scss'
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils'

const NavigationComponent = () => {
    const { currentUser } = useContext(UserContext);


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
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavigationComponent