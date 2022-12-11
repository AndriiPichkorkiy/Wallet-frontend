/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import {Container, Header,FormContainer, LabelContainer, UserInput, StyledBtn } from './RegisterForm.styled';
import useForm from '../../helpers/useForm'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import useForm from '../../helpers/useForm';
import { Formik, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import {
  ContainerLogo,
  FormContainer,
  FieldStyled,
  FieldContainer,
  StyledIconMail,
  StyledImg,
  StyledIconPass,
  StyledIconUser,
  FieldLastStyled,
  StyledBtnMain,
  StyledBtn,
  StyledLargeImg,
  StyledErrorMsg,
  StyledProgressBar
} from './RegistrationForm.styled'
import icon from '../../assets/images/icons/logo.svg'
import icon_large from '../../assets/images/icons/logo-large.svg'
import { useDispatch, useSelector } from 'react-redux'
import Loader, { LoaderWrapper } from '../../components/Loader/Loader'
import { Navigate, useNavigate } from 'react-router-dom'

import ModalRegistration from '../../components/ModalLogout/ModalRegistration'

import { useSignUpMutation } from '../../services/authApi'

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Please enter a name')
    .strict()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Must be only letters'
    ),
  email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .email('Invalid email')
    .strict()
    .trim()
    .matches(
      /^[^-][a-zA-Z0-9.!#$%&'*+=?^_`{|}~-][^-]{0,}\@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/,
      'invalid email'
    )
    .required('Please enter an email'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .lowercase('Only lowercase letters are allowed')
    .strict()
    .trim()
    .matches(
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,16}$/,
      'Minimum six characters, one lowercase letter, one number and one special character'
    )
    .required('Please enter a password'),
  confirmPassword: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Please confirm your password')
    .lowercase('Only lowercase letters are allowed')
    .strict()
    .trim()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .matches(
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,16}$/,
      'Minimum six characters, one lowercase letter, one number and one special character'
    )
})
import ModalRegistration from '../../components/ModalLogout/ModalRegistration';
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Please enter a name')
        .strict()
        .trim()
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Must be only letters"),
    email: Yup.string()
        .min(10, 'Too Short!')
        .max(63, 'Too Long!')
        .matches(/^[^-][a-zA-Z0-9.!#$%&'*+=?^_`{|}~-][^-]{0,}\@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/, "At least two symbols before @")
        .email('Invalid email')
        .strict()
        .trim()
        .required('Please enter an email'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(12, 'Too Long!')
        .strict()
        .trim()
        .matches(/^(?=.*[a-zA-z0-9])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, "Minimum six characters, one lowercase letter, one number and one special character, without whiteSpace")
        .required('Please enter a password'),
    confirmPassword: Yup.string()
        .min(6, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Please confirm your password')
        .strict()
        .trim()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .matches(/^(?=.*[a-zA-z0-9])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, "Minimum six characters, one lowercase letter,one uppercase letter, one number and one special character, without whiteSpace")
});

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const RegistrationForm = ({ onSubmit }) => {
  const { handleChange, handleSubmit } = useForm({ initialState, onSubmit })
  const dispatch = useDispatch()
  console.log()

  //из этого хука мы получаем функцию signUp, которая будет вызываться при отправке формы
  const [signUp, { isLoading, isError, isSuccess, error }] = useSignUpMutation()
  // isLoading - статус загрузки
  // isError - статус ошибки
  // isSuccess - статус успеха
  // error - объект ошибки
const RegistrationForm = ({ onSubmit, isLoading }) => {
    const [passwordHardness, setPasswordHardness] = useState(0);

    const { handleChange, handleSubmit } = useForm({ initialState, onSubmit })
    // const isFetching = useSelector(state => state.userV2.loading);
    const isRegistratiunSuccess = useSelector(state => state.userV2.isLogin);

  const isRegistrationSuccess = useSelector(state => state.user.user.name)
  console.log('isLoading: ', isLoading)
  const navigate = useNavigate()

  useEffect(() => {
    if (isRegistrationSuccess && window.newUser !== 'EXIT') {
      // redirect
      navigate('/login?newUser=true', { replace: true })
      window.newUser = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRegistrationSuccess])
    useEffect(() => {
        if (isRegistratiunSuccess) {
            // redirect
            navigate("/login?register=true", { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isRegistratiunSuccess])

    function increasePasswordHardness(event) {
        if (event.target.name === 'password') {
            let passwordProgress = document.querySelector('.MuiLinearProgress-bar');

            //Regular Expressions.
            let regex = [];
            regex.push("[A-Z]"); //Uppercase Alphabet.
            regex.push("[a-z]"); //Lowercase Alphabet.
            regex.push("[0-9]"); //Digit.
            regex.push("[$@$!%*#?&]"); //Special Character.

            let passed = 0;

            //Validate for each Regular Expression.
            for (var i = 0; i < regex.length; i++) {
                if (new RegExp(regex[i]).test(event.target.value)) {
                    passed++;
                }
            }
            //Display status.
            switch (passed) {
                case 1:
                    setPasswordHardness(30);
                    passwordProgress.style.backgroundColor = "red";
                    break;
                case 2:
                    setPasswordHardness(50);
                    passwordProgress.style.backgroundColor = "#e4e42a";
                    // setPasswordHardness(passwordHardness + 20);
                    break;
                case 3:
                    setPasswordHardness(80);
                    passwordProgress.style.backgroundColor = "orange";
                    // setPasswordHardness(passwordHardness + 30);
                    break;
                case 4:
                    setPasswordHardness(100);
                    passwordProgress.style.backgroundColor = "#24cca7";
                    break;
                default:
                    setPasswordHardness(0);
            }
        }
    }



  return (
    <FormContainer>
      {isLoading ? <LoaderWrapper /> : null}
      <ContainerLogo>
        <StyledImg src={icon} alt='wallet' />
        <StyledLargeImg src={icon_large} alt='wallet' />
        {/* <span>
                    <svg width='30' height='30'>
                        <use href='../../assets/images/icons/wallet30x30.svg'></use>
                    </svg>
                </span> */}
      </ContainerLogo>
      <Formik
        validationSchema={SignUpSchema}
        initialValues={initialState}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          handleSubmit(data)
          setSubmitting(false)
          resetForm()
        }}
      >
        {({ isSubmitting, errors, touched, resetForm }) => (
          <Form>
            <FieldContainer>
              <FieldStyled
                type='email'
                name='email'
                title='Enter your email Please!'
                placeholder='E-mail'
              />
              <StyledIconMail />
              {errors.email && touched.email ? (
                <StyledErrorMsg>{errors.email}</StyledErrorMsg>
              ) : null}
            </FieldContainer>
            <FieldContainer>
              <FieldStyled
                type='password'
                name='password'
                placeholder='Password'
                title='Minimum six characters, at least one letter and one number'
              />
              <StyledIconPass />
              {errors.password && touched.password ? (
                <StyledErrorMsg>{errors.password}</StyledErrorMsg>
              ) : null}
            </FieldContainer>
            <FieldContainer>
              <FieldStyled
                type='password'
                name='confirmPassword'
                placeholder='Confirm password'
                title='Minimum six characters, at least one letter and one number'
              />
              <StyledProgressBar value={30} variant='determinate' />
              <StyledIconPass />
              {errors.confirmPassword && touched.confirmPassword ? (
                <StyledErrorMsg>{errors.confirmPassword}</StyledErrorMsg>
              ) : null}
            </FieldContainer>
            <FieldContainer>
              <FieldLastStyled
                type='text'
                name='name'
                placeholder='First name'
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />
              <StyledIconUser />
              {errors.name && touched.name ? (
                <StyledErrorMsg>{errors.name}</StyledErrorMsg>
              ) : null}
            </FieldContainer>
    return (
        <FormContainer>
            {isLoading ? <LoaderWrapper /> : null}
            <ContainerLogo>
                <StyledImg src={icon} alt="wallet" />
                <StyledLargeImg src={icon_large} alt="wallet" />
            </ContainerLogo>
            <Formik
                validationSchema={SignupSchema}
                initialValues={initialState}
                onSubmit={(data, { setSubmitting, resetForm }) => {
                    handleSubmit(data);
                    setSubmitting(false);
                    // resetForm();
                }}

            >
                {({ isSubmitting, errors, touched, resetForm }) => (
                    <Form onChange={increasePasswordHardness}>
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
                            <StyledProgressBar value={passwordHardness} variant="determinate" />
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

            <StyledBtnMain type='submit' disabled={isSubmitting}>
              Register
            </StyledBtnMain>
            <StyledBtn to='/login'>Login</StyledBtn>
          </Form>
        )}
      </Formik>
    </FormContainer>
  )
}

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
    onSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.func.isRequired,
};

export default RegistrationForm


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
