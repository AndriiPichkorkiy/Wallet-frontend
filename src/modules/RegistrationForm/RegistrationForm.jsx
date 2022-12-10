/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import {Container, Header,FormContainer, LabelContainer, UserInput, StyledBtn } from './RegisterForm.styled';
import useForm from '../../helpers/useForm'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
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

  const isRegistrationSuccess = useSelector(state => state.user.user.name)
  console.log('isLoading: ', isLoading)
  const navigate = useNavigate()

  useEffect(() => {
    if (isRegistrationSuccess && window.newUser !== 'EXIT') {
      // redirect
      alert("REDIRECT")
      navigate('/login?newUser=true', { replace: true })
      window.newUser = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRegistrationSuccess])

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

export default RegistrationForm

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
