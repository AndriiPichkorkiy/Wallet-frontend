import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useDispatch } from 'react-redux'
import {
  useLoginMutation,
  useLazyCurrentUserQuery
} from '../../services/authApi'

import { setToken } from '../../redux/auth/tokenSlice'
import { isAuth } from '../../redux/auth/authSlice'
import { newCurrentUser } from '../../redux/auth/authSlice'

import {
  StyledLargeImg,
  StyledFormContainer,
  StyledHeadContainer,
  StyledRegisterTitle,
  StyledRegisterImgContainer,
  StyledRegisterImgLargeContainer,
  StyledRegistrationPageContainer
} from '../RegistrationPage/RegistrationPage.styled'

import icon_register_tab from '../../assets/images/authImg/login-tablet.png'
import icon_register_desc from '../../assets/images/authImg/login-desk.png'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import { compose, connect } from 'redux';
import { withAuthRedirect } from '../../components/hoc/withAuthRedirect';
const LoginPage = () => {
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
        <StyledRegisterImgContainer>
          <StyledLargeImg src={icon_register_tab} alt='women with phone' />
        </StyledRegisterImgContainer>
        <StyledRegisterImgLargeContainer>
          <StyledLargeImg src={icon_register_desc} alt='women with phone' />
        </StyledRegisterImgLargeContainer>
        <StyledRegisterTitle>Finance App</StyledRegisterTitle>
      </StyledHeadContainer>
      <StyledFormContainer>
        <LoginForm onSubmit={onLogin} />
      </StyledFormContainer>
    </StyledRegistrationPageContainer>
  )
}

// export default withAuthRedirect(LoginPage);
export default LoginPage

// export default compose(
//     connect(mapStateToProps, {getUserProfile}),
//     withRouter,
//     withAuthRedirect
// )(ProfileContainer)