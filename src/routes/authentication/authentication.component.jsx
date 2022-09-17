import SignUpFormComponent from '../../components/sign-up-form/sign-up-form.component';
import SignInFormComponent from '../../components/sign-in-form/sign-in-form.component';


const AuthenticationComponent = () => {
    return (
        <div className='authentication-container'>
            <SignInFormComponent />
            <SignUpFormComponent />
        </div>
    )
}

export default AuthenticationComponent