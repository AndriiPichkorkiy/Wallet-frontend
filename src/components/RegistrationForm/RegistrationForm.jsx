/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useForm from '../../helpers/useForm'
import { Formik, Form } from 'formik'
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
import Loader, { LoaderWrapper } from '../Loader/Loader'
import { Navigate, useNavigate } from 'react-router-dom'
import ModalRegistration from '../ModalLogout/ModalRegistration'
import { useSignUpMutation } from '../../services/authApi'
import { SignUpSchema } from '../../helpers/CommonSChemas'
import { isRegister } from '../../redux/auth/authSlice'
const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const RegistrationForm = ({ onSubmit }) => {
    const [passwordHardness, setPasswordHardness] = useState(0)
    const { handleChange, handleSubmit } = useForm({ initialState, onSubmit })
    // const dispatch = useDispatch()

    //из этого хука мы получаем функцию signUp, которая будет вызываться при отправке формы
    const [signUp, { isLoading, isError, isSuccess, error }] = useSignUpMutation()

    const isRegistrationSuccess = useSelector(state => state.user.user.name)
    // const newUser = useSelector(state => state.user.newUser)
    // console.log('newUser: ', newUser)
    // console.log('isLoading: ', isLoading)
    // const navigate = useNavigate()

    useEffect(() => {
        console.log(isLoading)
    }, [isLoading])
    // useEffect(() => {
    //   if (isRegistrationSuccess && window.newUser !== 'EXIT') {
    //     // redirect
    //     navigate('/login?newUser=true', { replace: true })
    //     window.newUser = true
    //   }
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isRegistrationSuccess])

    function increasePasswordHardness(event) {
        if (event.target.name === 'password') {
            let passwordProgress = document.querySelector('.MuiLinearProgress-bar')

            //Regular Expressions.
            let regex = []
            regex.push('[A-Z]') //Uppercase Alphabet.
            regex.push('[a-z]') //Lowercase Alphabet.
            regex.push('[0-9]') //Digit.
            regex.push('[$@$!%*#?&]') //Special Character.

            let passed = 0

            //Validate for each Regular Expression.
            for (var i = 0; i < regex.length; i++) {
                if (new RegExp(regex[i]).test(event.target.value)) {
                    passed++
                }
            }
            //Display status.
            switch (passed) {
                case 1:
                    setPasswordHardness(30)
                    passwordProgress.style.backgroundColor = 'red'
                    break
                case 2:
                    setPasswordHardness(50)
                    passwordProgress.style.backgroundColor = '#e4e42a'
                    // setPasswordHardness(passwordHardness + 20);
                    break
                case 3:
                    setPasswordHardness(80)
                    passwordProgress.style.backgroundColor = 'orange'
                    // setPasswordHardness(passwordHardness + 30);
                    break
                case 4:
                    setPasswordHardness(100)
                    passwordProgress.style.backgroundColor = '#24cca7'
                    break
                default:
                    setPasswordHardness(0)
            }
        }
    }

    return (
        <FormContainer>
            {isLoading ? <LoaderWrapper /> : null}
            <Formik
                validationSchema={SignUpSchema}
                initialValues={initialState}
                onSubmit={(data, { setSubmitting, resetForm }) => {
                    handleSubmit(data)
                    setSubmitting(false)
                    // resetForm();
                }}
            >
                {({ isSubmitting, errors, touched, resetForm }) => (
                    <Form onChange={increasePasswordHardness}>
                        <ContainerLogo>
                            <StyledImg src={icon} alt='wallet' />
                            <StyledLargeImg src={icon_large} alt='wallet' />
                        </ContainerLogo>
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
                            <StyledProgressBar
                                value={passwordHardness}
                                variant='determinate'
                            />
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
