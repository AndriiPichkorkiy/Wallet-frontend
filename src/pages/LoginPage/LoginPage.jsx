import React from 'react';
import LoginForm from '../../modules/LoginForm/LoginForm'
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/auth-operations';
import {
    StyledImg, StyledLargeImg, StyledFormContainer, StyledRightCornerImgContainer,
    StyledHeadContainer, StyledRegisterTitle, StyledRegisterImgContainer,
    StyledRegisterImgLargeContainer, StyledLeftCornerImgContainer, StyledRightCornerImgLargeContainer,
    StyledRegistrationPageContainer
} from '../RegistrationPage/RegistrationPage.styled';
// import icon_pink from '../../assets/images/ellipsesBg/EllipsePink.png';
// import icon_pink_tablet from '../../assets/images/ellipsesBg/EllipsePinkTablet.png';
// import icon_violet from '../../assets/images/ellipsesBg/EllipseViolet.png';
import icon_register_tab from '../../assets/images/authImg/login-tablet.png';
import icon_register_desc from '../../assets/images/authImg/login-desk.png';
const LoginPage = () => {
    const dispatch = useDispatch();

    const onLogin = (data) => {
        dispatch(signIn(data))
    }
    return (
          <StyledRegistrationPageContainer>
            <StyledHeadContainer>
                {/* <StyledLeftCornerImgContainer>
                    <StyledLargeImg src={icon_violet} alt="violet circle"/>
                </StyledLeftCornerImgContainer> */}

                <StyledRegisterImgContainer>
                    <StyledLargeImg src={icon_register_tab} alt="women with phone"/>
                </StyledRegisterImgContainer>

                <StyledRegisterImgLargeContainer>
                    <StyledLargeImg src={icon_register_desc} alt="women with phone"/>
                </StyledRegisterImgLargeContainer>

                <StyledRegisterTitle>Finance App</StyledRegisterTitle>
            </StyledHeadContainer>

            <StyledFormContainer> 
                {/* <StyledRightCornerImgContainer>
                    <StyledImg src={icon_pink} alt="pink circle"/>
                    
                </StyledRightCornerImgContainer> */}
                {/* <StyledRightCornerImgLargeContainer>
                    <StyledImg src={icon_pink_tablet} alt="pink circle"/>
                    
                </StyledRightCornerImgLargeContainer> */}
              <LoginForm onSubmit={onLogin} />
            </StyledFormContainer>
        </StyledRegistrationPageContainer>
    )
}

export default LoginPage;
    // <div>
    //         <RegistrationForm onSubmit={onRegister} />
    //     </div>