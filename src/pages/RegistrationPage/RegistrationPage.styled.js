import styled from "styled-components";
import { respondTo } from '../../helpers/respondTo';

export const StyledRegistrationPageContainer = styled.div`
        position: relative;
        ${respondTo.sm`
                padding:60px 117px 48px 118px;
        `}
           ${respondTo.lg`
           display:flex;
           align-items: center;
           width:100%;
                padding:0;
        `}
`
export const StyledFormContainer = styled.div`
          ${respondTo.lg`
                padding:52px 91px 52px 107px;
                background: rgba(255, 255, 255, 0.4);
                backdrop-filter: blur(25px);
        `}
`
export const StyledHeadContainer = styled.div`
        display: flex;
        align-items: center;
        margin-bottom: 50px;
        flex-grow: 1;
           ${respondTo.lg`
             flex-direction: column;
        `}
`
export const StyledRegisterTitle = styled.div`
        display:none;
        ${respondTo.sm`
        display:inline-block;
        font-family: 'Poppins';
        font-size: 30px;
        color: var(--main-text);
        `}
`
export const StyledImg = styled.img`
    // ${respondTo.sm`
    //         display:none;
    // `}
`
export const StyledLargeImg = styled.img`
        // display:none;
        // ${respondTo.sm`
        //         display:inline-block;
        // `}
`
export const StyledRegisterImgContainer = styled.div`
        display:none;
        ${respondTo.sm`
                display:block;
                margin-right: 40px;
        `}
           ${respondTo.lg`
                display:none;
        `}
`
export const StyledRegisterImgLargeContainer = styled.div`
        display:none;
        ${respondTo.lg`
                display:block;
                margin-bottom:32px;
        `}
`
export const StyledRightCornerImgContainer = styled.div`
        display:none;
        ${respondTo.sm`
                display:block;
                position:absolute;
                top:0;
                right:-152px;
                z-index:-1;
        `}
                   ${respondTo.lg`
                display:none;
        `}
`

export const StyledLeftCornerImgContainer = styled.div`
        display:none;
        ${respondTo.sm`
                display:block;
                position:absolute;
                bottom:0;
                left:0;
                z-index:-1;
        `}

`

export const StyledRightCornerImgLargeContainer = styled.div`
        display:none;
        ${respondTo.lg`
                display:block;
                position:absolute;
                top:0;
                right:0;
                z-index:-1;
        `}
`