import SignUpFormComponent from '../../components/sign-up-form/sign-up-form.component';
import SignInFormComponent from '../../components/sign-in-form/sign-in-form.component';
import './authentication.component.jsx.scss'


const AuthenticationComponent = () => {
    return (
        <div className='authentication-container'>
            <SignInFormComponent />
            <SignUpFormComponent />
        </div>
    )
}

export default AuthenticationComponent