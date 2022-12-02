import styled from "styled-components";
// import  '../../assets/css/utils/_vars.scss'
import { Field } from 'formik';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
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


    &::placeholder{
         color:#bdbdbd;
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
`