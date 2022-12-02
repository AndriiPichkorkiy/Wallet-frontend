import  styled from "styled-components";
// import  '../../assets/css/utils/_vars.scss'
import { Field } from 'formik';
// import {Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import { css } from 'styled-components';
// import { breakpoints } from './_variables';

// export const respondTo = Object.keys(breakpoints).reduce(
//   (accumulator, label) => {
//     accumulator[label] = (...args) => css`
//       @media (min-width: ${breakpoints[label]}) {
//         ${css(...args)};
//       }
//     `;
//     return accumulator;
//   },
//   {}
// );
// export const breakpoints = {
//   xs: '480px',
//   sm: '768px',
//   md: '992px',
//   lg: '1200px'
// };

// // Create mixin
// @mixin respond-to($breakpoint) {
//   @media (min-width: #{map-get($breakpoints, $breakpoint)}) {
//     @content;
//   }
// }

// // Example usage
// html {
//   background-color: lime;

//   @include respond-to(sm) {
//     background-color: aqua;
//   }
// }
export const ContainerLogo = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
export const FormContainer = styled.div`
    padding:36px 20px;
    background-color:#fff;
`
export const FieldStyled = styled(Field)`
        width:100%;
        font-size: 18px;
        
        border:none;
        padding: 8px 10px 8px 56px;
        border-bottom: 1px solid #E0E0E0; 
        border: 1px solid transparent;
            &::placeholder{
         color:#bdbdbd;
    }
&:hover, &:focus{
        border: 1px solid #24CCA7;
        border-radius: 10px;

         &::placeholder{
         color:#24CCA7;}      
}
`
export const FieldLastStyled = styled(Field)`
    width:100%;
    font-size: 18px;
   
    border:none;
    padding: 8px 10px 8px 40px;
    border-bottom: 1px solid #E0E0E0; 
   &::placeholder{
         color:#bdbdbd;
    }
&:hover, &:focus{
        border: 1px solid #24CCA7;
        border-radius: 10px;

         &::placeholder{
         color:#24CCA7;}      
}
`
export const FieldContainer = styled.div`
        width:100%;
        position:relative;
        margin-bottom:40px;
`
export const StyledIconMail = styled(EmailIcon)`
        position:absolute;
        top:calc(50% - 12px);
        left:10px;
        width:24px !important;
        height:24px !important; 
        color:#bdbdbd;
`
export const StyledImg = styled.img`
        margin-bottom:60px;
`
export const StyledIconPass= styled(LockIcon)`
        position:absolute;
        top:calc(50% - 12px);
        left:10px;
        width:24px !important;
        height:24px !important; 
        color:#bdbdbd;
`
export const StyledIconUser = styled(AccountBoxIcon)`
        position:absolute;
        top:calc(50% - 12px);
        left:10px;
        width:24px !important;
        height:24px !important; 
        color:#bdbdbd;
`
export const StyledBtnMain = styled.button`
        display: inline-block;
        width: 100%;
        padding:13px 61px;
        background: #24CCA7;
        border-radius: 20px;
        text-transform: uppercase;
        color:#fff;
        font-family: 'Circe';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-bottom: 20px;
           &:hover, &:focus{
                background:#3b9b86;
        }
`
export const StyledBtn= styled.button`
        display: inline-block;
        width: 100%;
        padding:13px 61px;
        background: transparent;
        color: #4A56E2;
        border: 1px solid #4A56E2;
        border-radius: 20px;
        text-transform: uppercase;
        font-family: 'Circe';
        font-size: 18px;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        &:hover, &:focus{
                background:#4A56E2;
                color:#fff;
        }
`