import React from 'react'
import LoginForm from '../../modules/LoginForm/LoginForm'
import { useDispatch } from 'react-redux'

import {
  useLoginMutation,
  useLazyCurrentUserQuery
} from '../../services/authApi'

import { setToken } from '../../redux/auth/tokenSlice'
import { isAuth } from '../../redux/auth/authSlice'
import { newCurrentUser } from '../../redux/auth/authSlice'

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
} from '../RegistrationPage/RegistrationPage.styled'
import icon_pink from '../../assets/images/ellipsesBg/EllipsePink.png'
import icon_pink_tablet from '../../assets/images/ellipsesBg/EllipsePinkTablet.png'
import icon_violet from '../../assets/images/ellipsesBg/EllipseViolet.png'
import icon_register_tab from '../../assets/images/authImg/login-tablet.png'
import icon_register_desc from '../../assets/images/authImg/login-desk.png'
import { Notify } from 'notiflix/build/notiflix-notify-aio'

const LoginPage = () => {
  // const state = useSelector(state => state)
  // console.log('state', state)
  const dispatch = useDispatch()

  const [login, { isError, error }] = useLoginMutation()
  const [currentUser] = useLazyCurrentUserQuery()

  if (isError) {
    Notify.failure(error.data.message)
  }

  const onLogin = async data => {
    const response = await login(data).unwrap()
    console.log('response: ', response)
    if (!response.token) {
      console.log('error', isError)
      return
    }
    dispatch(setToken(response))
    const user = await currentUser().unwrap()
    dispatch(newCurrentUser(user))
    dispatch(isAuth())
  }

  return (
    <StyledRegistrationPageContainer>
      <StyledHeadContainer>
        <StyledLeftCornerImgContainer>
          <StyledLargeImg src={icon_violet} alt='violet circle' />
        </StyledLeftCornerImgContainer>

        <StyledRegisterImgContainer>
          <StyledLargeImg src={icon_register_tab} alt='women with phone' />
        </StyledRegisterImgContainer>

        <StyledRegisterImgLargeContainer>
          <StyledLargeImg src={icon_register_desc} alt='women with phone' />
        </StyledRegisterImgLargeContainer>

        <StyledRegisterTitle>Finance App</StyledRegisterTitle>
      </StyledHeadContainer>

      <StyledFormContainer>

        <StyledRightCornerImgContainer>
          <StyledImg src={icon_pink} alt='pink circle' />
        </StyledRightCornerImgContainer>
        <StyledRightCornerImgLargeContainer>
          <StyledImg src={icon_pink_tablet} alt='pink circle' />
        </StyledRightCornerImgLargeContainer>
        <LoginForm onSubmit={onLogin} />

      </StyledFormContainer>
    </StyledRegistrationPageContainer>
  )
}

export default LoginPage
