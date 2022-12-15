import React, { useEffect } from 'react'
import { useSignUpMutation } from '../../services/authApi'
import { isRegister } from '../../redux/auth/authSlice'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import {
  StyledLargeImg,
  StyledFormContainer,
  StyledHeadContainer,
  StyledRegisterTitle,
  StyledRegisterImgContainer,
  StyledRegisterImgLargeContainer,
  StyledRegistrationPageContainer
} from './RegistrationPage.styled'
// import { compose, connect } from 'redux';
import icon_register_tab from '../../assets/images/authImg/register-tablet.png'
import icon_register_desc from '../../assets/images/authImg/register-desk.png'
import { useDispatch } from 'react-redux'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import { useNavigate } from 'react-router'

const RegistrationPage = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const [signUp, { isError, isSuccess, error, isLoading }] = useSignUpMutation()

  if (isError) {
    Notify.failure(error.data.message)
  }

  console.log('isError: ', isError)
  useEffect(() => {
    console.log('isSuccess: ', isSuccess)
    if (isSuccess) {
      // redirect
      navigate('/login', { replace: true })
      window.newUser = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess])

  const onHandleSubmit = async data => {
    const { name, email, password } = data;
    const newData = { name, email, password };
    const response = await signUp(newData).unwrap()
    if (!response) {
      return console.log('error', error.data.message)
    }
    dispatch(isRegister(response))
  }

  return (
    <StyledRegistrationPageContainer>
      <StyledHeadContainer>
        <StyledRegisterImgContainer>
          <StyledLargeImg src={icon_register_tab} alt='women with phone' />
        </StyledRegisterImgContainer>

        <StyledRegisterImgLargeContainer>
          <StyledLargeImg src={icon_register_desc} alt='women with phone' />
        </StyledRegisterImgLargeContainer>
        <StyledRegisterTitle>Finance App</StyledRegisterTitle>
      </StyledHeadContainer>

      <StyledFormContainer>
        <RegistrationForm onSubmit={onHandleSubmit} isLoading={isLoading} />
      </StyledFormContainer>
    </StyledRegistrationPageContainer>
  )
}

// export default withAuthRedirect(RegistrationPage);

export default RegistrationPage
