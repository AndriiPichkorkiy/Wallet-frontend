import React from 'react';
import RegistrationForm from '../../modules/RegistrationForm/RegistrationForm';
import {
    StyledImg, StyledLargeImg, StyledFormContainer,StyledRightCornerImgContainer,
    StyledHeadContainer, StyledRegisterTitle, StyledRegisterImgContainer, 
    StyledRegisterImgLargeContainer, StyledLeftCornerImgContainer, StyledRightCornerImgLargeContainer,
    StyledRegistrationPageContainer
} from './RegistrationPage.styled';
import icon_pink from '../../assets/images/ellipsesBg/EllipsePink.png';
import icon_pink_tablet from '../../assets/images/ellipsesBg/EllipsePinkTablet.png';
import icon_violet from '../../assets/images/ellipsesBg/EllipseViolet.png';
import icon_register_tab from '../../assets/images/authImg/register-tablet.png';
import icon_register_desc from '../../assets/images/authImg/register-desk.png';
// import { useDispatch } from 'react-redux';
// import { signUp } from '../../redux/auth/auth-operations';
const RegistrationPage = () => {
    // const dispatch = useDispatch();

    const onRegister = (data) => {
        // dispatch(signUp(data))
        console.log(data)
    }
    return (
        <StyledRegistrationPageContainer>
            <StyledHeadContainer>
                <StyledLeftCornerImgContainer>
                    <StyledLargeImg src={icon_violet} alt="violet circle"/>
                </StyledLeftCornerImgContainer>

                <StyledRegisterImgContainer>
                    <StyledLargeImg src={icon_register_tab} alt="women with phone"/>
                </StyledRegisterImgContainer>

                <StyledRegisterImgLargeContainer>
                    <StyledLargeImg src={icon_register_desc} alt="women with phone"/>
                </StyledRegisterImgLargeContainer>

                <StyledRegisterTitle>Finance App</StyledRegisterTitle>
            </StyledHeadContainer>

            <StyledFormContainer> 
                <StyledRightCornerImgLargeContainer>
                    <StyledImg src={icon_pink} alt="pink circle"/>
                    
                </StyledRightCornerImgLargeContainer>
                <StyledRightCornerImgContainer>
                    <StyledImg src={icon_pink_tablet} alt="pink circle"/>
                    
                </StyledRightCornerImgContainer>
                <RegistrationForm onSubmit={onRegister} />
            </StyledFormContainer>
        </StyledRegistrationPageContainer>
    )
}

export default RegistrationPage;
    // <div>
    //         <RegistrationForm onSubmit={onRegister} />
    //     </div>