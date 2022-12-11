import styled from 'styled-components'
// import  '../../assets/css/utils/_vars.scss'
import { Field } from 'formik'
import { Link } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email'
import LockIcon from '@mui/icons-material/Lock'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import { respondTo } from '../../helpers/respondTo'
import { LinearProgress } from '@mui/material'

// export const ContainerTabl = styled.div`
//   /* margin: 32px 0 0 0; */
//   ${respondTo.sm`margin: 20px 32px 0 32px`}
//   ${respondTo.lg`margin: 46px 16px 0 70px`};
// `
export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`
export const FormContainer = styled.div`
  height: 100%;
  display: grid;
  position: relative;
  padding: 36px 20px;
  background-color: var(--background);
  ${respondTo.sm`
        min-width:533px;
        height: 616px;
        padding:40px 60px 66px 65px;
        border-radius:20px;
        margin-left:auto;
        margin-right:auto;
      `}
  ${respondTo.lg`
        height: 100%;
      `};
`
export const FieldStyled = styled(Field)`
  width: 100%;
  font-size: 18px;

  border: none;
  padding: 8px 10px 8px 56px;
  border: 1px solid transparent;
  border-bottom: 1px solid #e0e0e0;
  &::placeholder {
    color: var(--text-header);
    font-family: 'Circe';
  }
  &:hover,
  &:focus,
  &:focus-visible {
    border: 1px solid var(--accentPrimary);
    border-radius: 10px;
    outline: none;
    &::placeholder {
      color: var(--accentPrimary);
    }
    & + svg {
      color: var(--accentPrimary);
    }
  }
`
export const FieldLastStyled = styled(Field)`
  width: 100%;
  font-size: 18px;

  border: none;
  padding: 8px 10px 8px 40px;
  border: 1px solid transparent;
  border-bottom: 1px solid #e0e0e0;
  &::placeholder {
    color: var(--text-header);
    font-family: 'Circe';
  }
  &:hover,
  &:focus,
  &:focus-visible {
    border: 1px solid var(--accentPrimary);
    border-radius: 10px;
    outline: none;
    &::placeholder {
      color: (--accentPrimary);
    }
    & + svg {
      color: var(--accentPrimary);
    }
  }
`
export const FieldContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 40px;
`
export const StyledIconMail = styled(EmailIcon)`
  position: absolute;
  top: calc(50% - 12px);
  left: 10px;
  width: 24px !important;
  height: 24px !important;
  color: var(--text-header);
`
export const StyledImg = styled.img`
  ${respondTo.sm`
                display:none;
        `}
`
export const StyledLargeImg = styled.img`
  display: none;
  ${respondTo.sm`
                display:inline-block;
        `}
`

export const StyledIconPass = styled(LockIcon)`
  position: absolute;
  top: calc(50% - 12px);
  left: 10px;
  width: 24px !important;
  height: 24px !important;
  color: var(--text-header);
`
export const StyledIconUser = styled(AccountBoxIcon)`
  position: absolute;
  top: calc(50% - 12px);
  left: 10px;
  width: 24px !important;
  height: 24px !important;
  color: var(--text-header);
`
export const StyledBtnMain = styled.button`
  display: inline-block;
  width: 100%;
  max-height: 50px;
  padding: 13px 61px;
  background: var(--accentPrimary);
  border-radius: 20px;
  text-transform: uppercase;
  color: var(--background);
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 20px;
  &:hover,
  &:focus {
    background: #3b9b86;
  }
`
export const StyledBtn = styled(Link)`
  display: inline-block;
  width: 100%;
  max-height: 50px;
  padding: 13px 61px;
  background: transparent;
  color: var(--activeColor);
  border: 1px solid var(--activeColor);
  border-radius: 20px;
  text-transform: uppercase;
  font-family: 'Circe';
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  &:hover,
  &:focus {
    background: var(--activeColor);
    color: var(--background);
  }
`
export const StyledErrorMsg = styled.div`
  position: absolute;
  color: red;
  font-size: 12px;
  line-height: 1.2;
`
export const StyledProgressBar = styled(LinearProgress)`
  top: 8px;
  margin-bottom: 8px;
  background-color: #e5f1ef !important;
  border-radius: 5px;
  height: 6px !important;
  & > span {
    background-color: #24cca7 !important;
  }
`
