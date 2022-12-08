/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import {Container, Header,FormContainer, LabelContainer, UserInput, StyledBtn } from './RegisterForm.styled';
import useForm from '../../helpers/useForm';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
    ContainerLogo, FormContainer, FieldStyled,
    FieldContainer, StyledIconMail, StyledImg,
    StyledIconPass, StyledBtnMain, StyledBtn,
    StyledLargeImg, StyledErrorMsg
} from '../RegistrationForm/RegistrationForm.styled';


import icon from '../../assets/images/icons/logo.svg';
import icon_large from '../../assets/images/icons/logo-large.svg';
// import { useSearchParams } from 'react-router-dom';
import ModalRegistration from '../../components/ModalLogout/ModalRegistration';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { closeModal } from '../../redux/auth/auth-operations.js'
// const icon = require('./assets/images/icons/wallet30x30.svg')
const SigninSchema = Yup.object().shape({
    email: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .strict()
        .trim()
        .email('Invalid email')
        .required('Please enter an email'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(12, 'Too Long!')
        .lowercase('Only lowercase letters are allowed')
        .strict()
        .trim()
        .matches(/^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, "Minimum six characters, one lowercase letter, one number and one special character")
        .required('Please enter a password'),
});
const LoginForm = ({ onSubmit }) => {
    const initialState = {
        email: '',
        password: ''
    }
    const token = useSelector(state => state.userV2.token);
    const { handleChange, handleSubmit } = useForm({ initialState, onSubmit })
    // const {  email, password } = state;
    // const [searchParams] = useSearchParams();
    // const isNewRegistration = searchParams.get('register')
    const isRegistratiunSuccess = useSelector(state => state.userV2.isLogin);
    const state = useSelector(state => state.userV2);

    const [isShowModal, SetIsShowModal] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const closeModalPortal = () => { SetIsShowModal(false) }

    useEffect(() => {
        if (isRegistratiunSuccess === true) {
            // show modal
            SetIsShowModal(true)
            dispatch(closeModal(false))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        // console.log("token, ", token)
        if (token) {
            // redirect
            navigate("/cabinet", { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    return (
        <FormContainer>
            <ContainerLogo>
                <StyledImg src={icon} alt="wallet" />
                <StyledLargeImg src={icon_large} alt="wallet" />

            </ContainerLogo>
            <Formik
                validationSchema={SigninSchema}
                onSubmit={handleSubmit}
                initialValues={initialState}>
                {({ errors, touched }) => (
                    <Form>
                        <FieldContainer>
                            <StyledIconMail />
                            <FieldStyled
                                type="email"
                                name="email"
                                title="Enter your email Please!"
                                placeholder="E-mail"
                            />
                            {errors.email && touched.email ? (
                                <StyledErrorMsg>{errors.email}</StyledErrorMsg>
                            ) : null}
                        </FieldContainer>
                        <FieldContainer>
                            <StyledIconPass />
                            <FieldStyled
                                type="password"
                                name="password"
                                placeholder="Password"
                                title="Minimum six characters, one lowercase letter, one number and one special character"
                            />
                            {errors.password && touched.password ? (
                                <StyledErrorMsg>{errors.password}</StyledErrorMsg>
                            ) : null}
                        </FieldContainer>
                        <StyledBtnMain type='submit'>Login</StyledBtnMain>
                        <StyledBtn to='/register'>Register</StyledBtn>
                    </Form>
                )}
            </Formik>
            {isShowModal && <ModalRegistration onCloseModal={closeModalPortal} text="Thanks for registration! Please confirm your email before entering the account" btnClose="Continue" />}
        </FormContainer>
    )
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
export default LoginForm;

//   <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         email: '',
//       }}
//       onSubmit={async (values) => {
//         await new Promise((r) => setTimeout(r, 500));
//         alert(JSON.stringify(values, null, 2));
//       }}
//     >
//       <Form>
//         <label htmlFor="firstName">First Name</label>
//         <Field id="firstName" name="firstName" placeholder="Jane" />

//         <label htmlFor="lastName">Last Name</label>
//         <Field id="lastName" name="lastName" placeholder="Doe" />

//         <label htmlFor="email">Email</label>
//         <Field
//           id="email"
//           name="email"
//           placeholder="jane@acme.com"
//           type="email"
//         />
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>