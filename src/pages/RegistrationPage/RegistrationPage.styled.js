import styled from 'styled-components'
import { respondTo } from '../../helpers/respondTo'

export const StyledRegistrationPageContainer = styled.div`
  position: relative;
  height: 100vh;
  ${respondTo.sm`
                padding:60px 117px 48px 118px;
        `}
  ${respondTo.lg`
           display:flex;
           align-items: center;
                padding:0;
                margin: 0 auto;
        `}
`
export const StyledFormContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  
  ${respondTo.sm`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60%;
        `}
  ${respondTo.lg`
        padding:52px 91px 52px 107px;
        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(25px);
        `}
`
export const StyledHeadContainer = styled.div`
  ${respondTo.sm`
        display: flex;
        align-items: center;
        flex-grow: 1;
        margin-bottom: 50px;
        `}
  
  ${respondTo.lg`
        flex-direction: column;
        `}
`

export const StyledImg = styled.img`
  // ${respondTo.sm`
    //         display:none;
    // `}
`
export const StyledLargeImg = styled.img`
animation-name: pulse;
  animation-timing-function: ease-in-out;
  animation-duration: 3s;

  @keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}
`
export const StyledRegisterImgContainer = styled.div`
  display: none;
  margin: 0;
  ${respondTo.sm`
                display:block;
                margin-right: 40px;
        `}
  ${respondTo.lg`
                display:none;
        `}
`
export const StyledRegisterImgLargeContainer = styled.div`
  display: none;
  ${respondTo.lg`
                display:block;
                margin-bottom:32px;
        `}
`
export const StyledRightCornerImgContainer = styled.div`
  display: none;
`

export const StyledLeftCornerImgContainer = styled.div`
  display: none;
`

export const StyledRightCornerImgLargeContainer = styled.div`
  display: none;
`

export const StyledRegisterTitle = styled.h2`
  display: none;
  font-weight: 400;

  overflow: hidden;
  background: linear-gradient(90deg, #24cca7, #4a56e2, #24cca7);
  background-repeat: no-repeat;
  background-size: 85%;
  animation: animate 5s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: #07013973;

@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
}

  ${respondTo.sm`
        display:inline-block;
        font-family: 'Poppins';
        
        font-size: 30px;
        color: var(--main-text);
        `}
`