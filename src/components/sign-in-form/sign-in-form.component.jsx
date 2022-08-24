import FormInputComponent from '../form-input/form-input.component';
import { useState } from 'react';
import { signInWithEmail,
        signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import ButtonComponent from '../button/button.component';
import './sign-in-form.styles.scss'

const defaultFormField = {
    email: '',
    password: '',
}

const SignInFormComponent = () => {
    const [ formFields, setFormFields ] = useState(defaultFormField);
    const { email, password } = formFields;

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const changeHandler = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    const resetFormFields = () => setFormFields(defaultFormField);

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInWithEmail(email, password);
            resetFormFields();
            alert(`Welcome back ${user.displayName}`);
        } catch(error) {
            switch (error) {
                case 'auth/user-not-found':
                    alert('User not found');
                    break;
                case 'auth/wrong-password':
                    alert('email or password is incorrect');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email</span>
            <form onSubmit={submitHandler}>
                <FormInputComponent
                    label='Email'
                    type='email'
                    required
                    name='email'
                    onChange={changeHandler}
                    value={email} />

                <FormInputComponent
                    label='Password'
                    type='password'
                    required
                    name='password'
                    onChange={changeHandler}
                    value={password} />
                <div className='buttons-container'>
                    <ButtonComponent type='submit'>Sign In</ButtonComponent>
                    <ButtonComponent type='button' buttonType='google' onClick={signInWithGoogle}>
                        Google Sign In
                    </ButtonComponent>
                </div>
            </form>
        </div>
    )
}

export default SignInFormComponent