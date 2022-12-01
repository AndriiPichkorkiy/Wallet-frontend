import React from 'react';
import RegistrationForm from '../../modules/RegistrationForm/RegistrationForm'
// import { useDispatch } from 'react-redux';
// import { signUp } from '../../redux/auth/auth-operations';
const RegistrationPage = () => {
    // const dispatch = useDispatch();

    // const onRegister = (data) => {
    //     dispatch(signUp(data))
    // }
    return (
        <div>
            <RegistrationForm onSubmit={console.log('test')} />
        </div>
    )
}

export default RegistrationPage;
    // <div>
    //         <RegistrationForm onSubmit={onRegister} />
    //     </div>