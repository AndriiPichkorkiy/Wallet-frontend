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
    StyledBtnMain, StyledBtn, StyledLargeImg, StyledErrorMsg,
    StyledProgressBar
} from './RegistrationForm.styled';
import icon from '../../assets/images/icons/logo.svg';
import icon_large from '../../assets/images/icons/logo-large.svg';
const SignupSchema = Yup.object().shape({
        name: Yup.string()
        .min(1, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Please enter a name')
        .strict()
        .trim()
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Must be only letters"),
        email: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .email('Invalid email')
        .strict()
        .trim()
        .required('Please enter an email'),
        password: Yup.string()
        .min(6, 'Too Short!')
        .max(12, 'Too Long!')
        .lowercase('Only lowercase letters are allowed')
        .strict()
        .trim()
        .matches(/^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, "Minimum six characters, one lowercase letter, one number and one special character")
        .required('Please enter a password'),
        confirmPassword: Yup.string()
        .min(6, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Please confirm your password')
        .lowercase('Only lowercase letters are allowed')
        .strict()
        .trim()
        .oneOf([Yup.ref('password'),null], 'Password must match')
        .matches(/^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, "Minimum six characters, one lowercase letter, one number and one special character"),
});

const RegistrationForm = ({ onSubmit }) => {
    const initialState = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})
    // const { name, email, password, confirmPassword } = state;
    return (
        <FormContainer>
            <ContainerLogo>
                <StyledImg src={icon} alt="wallet"/>
                 <StyledLargeImg src={icon_large} alt="wallet"/>
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
                                title="Enter your email Please!"
                                placeholder="E-mail"
                            />
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
                                title="Minimum six characters, at least one letter and one number"
                            />
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
                                title="Minimum six characters, at least one letter and one number"
                            />
                            <StyledProgressBar value={30} variant="determinate" />
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
                                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            />
                            <StyledIconUser />
                               {errors.name && touched.name ? (
                                    <StyledErrorMsg>{errors.name}</StyledErrorMsg>) : null}
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