import React from 'react';
import LoginForm from '../../modules/LoginForm/LoginForm'
// import { useDispatch } from 'react-redux';
// import { signUp } from '../../redux/auth/auth-operations';
const LoginPage = () => {
    // const dispatch = useDispatch();

    // const onRegister = (data) => {
    //     dispatch(signUp(data))
    // }
    return (
        <div>
            <LoginForm onSubmit={console.log('test')} />
        </div>
    )
}

export default LoginPage;
    // <div>
    //         <RegistrationForm onSubmit={onRegister} />
    //     </div>