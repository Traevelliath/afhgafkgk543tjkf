import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user-actions';
import ButtonComponent from '../button/button.component';
import FormInputComponent from '../form-input/form-input.component';


const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpFormComponent = () => {
    const dispatch = useDispatch();
    const [ formFields, setFormFields ] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formFields;


    const resetFormFields = () => setFormFields(defaultFormField);

    const changeHandler = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if ( password !== confirmPassword ) return alert('passwords are not identical, fix it.');
        try {
            dispatch(signUpStart(email, password, displayName));
            resetFormFields();
            alert('You are registered now.');
        } catch (error) {
            if ( error.code === 'auth/email-already-in-use' ) alert('email provided is already in use');
            else console.log(error.message);
        }
    };

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email</span>
            <form onSubmit={ submitHandler }>
                <FormInputComponent
                    label='Display Name'
                    type='text'
                    required
                    name='displayName'
                    onChange={ changeHandler }
                    value={ displayName }/>

                <FormInputComponent
                    label='Email'
                    type='email'
                    required
                    name='email'
                    onChange={ changeHandler }
                    value={ email }/>

                <FormInputComponent
                    label='Password'
                    type='password'
                    required
                    name='password'
                    onChange={ changeHandler }
                    value={ password }/>

                <FormInputComponent
                    label='Confirm Password'
                    type='password'
                    required
                    name='confirmPassword'
                    onChange={ changeHandler }
                    value={ confirmPassword }/>
                <ButtonComponent type='submit'>Submit</ButtonComponent>
            </form>
        </div>
    );
};

export default SignUpFormComponent;