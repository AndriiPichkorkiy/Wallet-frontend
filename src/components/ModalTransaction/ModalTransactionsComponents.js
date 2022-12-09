import styled from 'styled-components';
import Switch from "react-switch";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

import { respondTo } from '../../helpers/respondTo'

export const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  z-index:111
 
`

export const ModalTransactionsContainer = styled.div`
 position: fixed;
  height: auto;
  /* height: 581px; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
    /* @media screen and(max-width:479px) {
    width: 90vw;
  }

  @media screen and(min-width:480px) {
    width: 450px;
  }

  @media screen and(min-width:1200px) {
    width: 528px;
  } */


/* margin: 0 10px 37px; */
${respondTo.xs`margin: 0 20px 37px`}
 ${respondTo.sm`border-radius:20px;min-width:504px`}


`
export const StyledForm = styled.form`
display:flex;
flex-direction:column;
margin: 0 10px;`

export const TitleTransactions = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 36px;
text-align: center;
color: #000000;
margin:20px 0 40px`

export const LabelIncome = styled.label`
font-family: 'Circe';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #24CCA7;
margin-right: 20px;
`
export const IncomeExpensContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const SwitchInput = styled(Switch)`
 transform: rotate(180deg);
  `
export const LabelExpense = styled.label`
font-family: 'Circe';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
margin-left:20px;
color: #FF6596;

`
export const StyledInput = styled.input`
color: '#BDBDBD';
padding-left:20px;
  outline: none;
  border: none;
  border-bottom: #E0E0E0 1px solid;
  margin: 40px 10px 0;
`


export const StyledTextarea = styled.textarea`
padding-left:20px;
color: '#BDBDBD';
resize: none;
outline: none;
border: none;
border-bottom: #E0E0E0 1px solid;
margin: 40px 10px 0;
height: 84px;`

export const StyledDatetime = styled(Datetime)`
outline: none;
padding-left:20px;
border: none;
border-bottom: #E0E0E0 1px solid;
 margin: 40px 10px 0;
  &>input{
    outline: none;
    border:none;
    width: 100%;
  }
`  
export const StyledDateIcon = styled.img`
position: absolute;
 right:0;top:0;
 margin-top:40px;
 margin-right:16px;
 pointer-events:none
`
export const StyledAddButton = styled.button`
   
    background-color: #24CCA7;
    margin: 40px 0 20px;
    height: 50px;
    border: none;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;` 

export const StyledAddButtonText = styled.span`
 color: #FFFFFF;` 

export const StyledCancelButtonText = styled.span`
  color: #4A56E2;
`

export const StyledCancelButton = styled.button`
    background-color: #FFFFFF;
    margin-bottom:37px;
    height: 50px;
    border: 1px solid #4A56E2;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`