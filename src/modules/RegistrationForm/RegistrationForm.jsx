import React from 'react';
import PropTypes from 'prop-types';
// import {Container, Header,FormContainer, LabelContainer, UserInput, StyledBtn } from './RegisterForm.styled';
import useForm from '../../helpers/useForm';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
    ContainerLogo, FormContainer, FieldStyled,
    FieldContainer, StyledIconMail, StyledImg,
    StyledIconPass, StyledIconUser, FieldLastStyled,
    StyledBtnMain, StyledBtn, StyledLargeImg, StyledErrorMsg
} from './RegistrationForm.styled';

import icon from '../../assets/images/icons/logo.svg';
import icon_large from '../../assets/images/icons/logo-large.svg';
// const icon = require('./assets/images/icons/wallet30x30.svg')
const SignupSchema = Yup.object().shape({
   password: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Please enter a password'),
    // .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/, "Must be min 6 characters long"),
    confirmPassword: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Please confirm your password'),
    // .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/, "Must matches  the password above"),
    email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter an email'),
    // .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, "Must be like bjohnson@gmail.com"),
    name: Yup.string()
        .min(1, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Please enter a name')
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Must be only letters"),
 });
const RegistrationForm = ({ onSubmit }) => {
    const initialState = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})
    const { name, email, password, confirmPassword } = state;
    return (
        <FormContainer>
            <ContainerLogo>
                <StyledImg src={icon} alt="wallet" className='' />
                 <StyledLargeImg src={icon_large} alt="wallet" className='' />
                {/* <span>
                    <svg width='30' height='30'>
                        <use href='../../assets/images/icons/wallet30x30.svg'></use>
                    </svg>
                </span> */}
            </ContainerLogo>
            <Formik
                validationSchema={SignupSchema}
                initialValues={initialState}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <FieldContainer>
                            <FieldStyled
                                type="email"
                                name="email"
                                // pattern=""
                                title="Enter your email Please!"
                                placeholder="E-mail"
                                required
                                value={email}
                                onChange={handleChange} />
                            <StyledIconMail />
                               {errors.email && touched.email ? (
                                    <StyledErrorMsg>{errors.email}</StyledErrorMsg>
                                ) : null}
                        </FieldContainer>
                        <FieldContainer>
                            <FieldStyled
                                type="password"
                                name="password"
                                placeholder="Password"
                                // pattern="^"
                                title="Minimum eight characters, at least one letter and one number"
                                required
                                value={password}
                                onChange={handleChange} />
                            <StyledIconPass />
                               {errors.password && touched.password ? (
                                    <StyledErrorMsg>{errors.password}</StyledErrorMsg>
                                ) : null}
                        </FieldContainer>
                        <FieldContainer>
                            <FieldStyled
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm password"
                                // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                                title="Minimum eight characters, at least one letter and one number"
                                required
                                value={confirmPassword}
                                onChange={handleChange} />
                            <StyledIconPass />
                               {errors.confirmPassword && touched.confirmPassword ? (
                                    <StyledErrorMsg>{errors.confirmPassword}</StyledErrorMsg>
                                ) : null}
                        </FieldContainer>
                        <FieldContainer>
                            <FieldLastStyled
                                type="text"
                                name="name"
                                placeholder="First name"
                                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                required
                                value={name}
                                onChange={handleChange} />
                            <StyledIconUser />
                               {errors.name && touched.name ? (
                                    <div>{errors.name}</div>) : null}
                        </FieldContainer>
                          
                        <StyledBtnMain type='submit'>Register</StyledBtnMain>
                        <StyledBtn to='/login'>Login</StyledBtn>
                    </Form>
)}
            </Formik>
            </FormContainer>
        )
}
    
    RegistrationForm.propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };
export default RegistrationForm;

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