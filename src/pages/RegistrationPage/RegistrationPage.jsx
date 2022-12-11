import React from 'react'
import { useSignUpMutation } from '../../services/authApi'
import { isRegister } from '../../redux/auth/authSlice'
import RegistrationForm from '../../modules/RegistrationForm/RegistrationForm'
import {
  StyledImg,
  StyledLargeImg,
  StyledFormContainer,
  StyledRightCornerImgContainer,
  StyledHeadContainer,
  StyledRegisterTitle,
  StyledRegisterImgContainer,
  StyledRegisterImgLargeContainer,
  StyledLeftCornerImgContainer,
  StyledRightCornerImgLargeContainer,
  StyledRegistrationPageContainer
} from './RegistrationPage.styled'

import icon_register_tab from '../../assets/images/authImg/register-tablet.png'
import icon_register_desc from '../../assets/images/authImg/register-desk.png'
import { useDispatch } from 'react-redux'
import { Notify } from 'notiflix/build/notiflix-notify-aio'

const RegistrationPage = () => {
  const dispatch = useDispatch()
  const [signUp, { isError, isLoading, error }] = useSignUpMutation()
  console.log('isLoading', isLoading)

  if (isError) {
    Notify.failure(error.data.message)
  }

  const onHandleSubmit = async data => {
    const response = await signUp(data).unwrap()
    if (!response) {
      return console.log('error', isError)
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
        <RegistrationForm onSubmit={onHandleSubmit} />
      </StyledFormContainer>
    </StyledRegistrationPageContainer>
  )
}

export default RegistrationPage
