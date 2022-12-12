import styled from 'styled-components'
import Switch from 'react-switch'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'

import { respondTo } from '../../helpers/respondTo'

export const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  z-index: 111;
  overflow-y: scroll;
`

export const ModalTransactionsContainer = styled.div`
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  height: auto;
  width: 320px;
  margin: 0 auto;
  /* height: 581px; */
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
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
  ${respondTo.sm`border-radius:20px; min-width:540px`}
`
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  ${respondTo.sm`padding-left: 73px; padding-right: 73px`}
`

export const TitleTransactions = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #000000;
  margin: 20px 0 40px;
  ${respondTo.sm`font-size: 30px; margin-top: 40px;`}
`

export const LabelIncome = styled.label`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #24cca7;
  margin-right: 20px;
`
export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  ${respondTo.sm`flex-direction: row;`}
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
  margin-left: 20px;
  color: #ff6596;
`
export const StyledInput = styled.input`
  font-family: 'Circe';
  font-size: 18px;
  color: #bdbdbd;
  padding-left: 20px;
  padding-bottom: 8px;
  outline: none;
  border: none;
  border-bottom: #e0e0e0 1px solid;
  margin: 40px 10px 0;
  ${respondTo.sm`width: 190px;`}
`

export const StyledTextarea = styled.textarea`
  font-family: 'Circe';
  font-size: 18px;
  padding-left: 20px;
  color: #bdbdbd;
  resize: none;
  outline: none;
  border: none;
  border-bottom: #e0e0e0 1px solid;
  margin: 40px 10px 0;
  height: 84px;
`

export const StyledDatetime = styled(Datetime)`
  font-family: 'Circe';
  font-size: 18px;
  outline: none;
  padding-left: 20px;
  padding-bottom: 8px;
  border: none;
  border-bottom: #e0e0e0 1px solid;
  margin: 40px 10px 0;
  & > input {
    font-family: 'Circe';
    font-size: 18px;
    outline: none;
    border: none;
    width: 100%;
  }
`
export const StyledDateIcon = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 40px;
  margin-right: 16px;
  pointer-events: none;
`
export const StyledAddButton = styled.button`
  font-family: 'Circe';
  font-size: 18px;
  background-color: #24cca7;
  margin: 40px 0 20px;
  height: 50px;
  border: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${respondTo.sm`
  margin-left: auto;
  margin-right: auto;
     width: 300px;
    `}
  &:focus {
    background-color: var(--accentPrimary);
    background-image: linear-gradient(315deg, #89d891 0%, #03c8a8 74%);
  }
  &:hover {
    box-shadow: -4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px 4px 6px 0 rgba(116, 125, 139, 0.5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
      inset -4px -4px 6px 0 rgba(0, 0, 0, 0.4);
  }
`

export const StyledAddButtonText = styled.span`
  color: #ffffff;
`

export const StyledCancelButtonText = styled.span`
  font-family: 'Circe';
  font-size: 18px;
  color: #4a56e2;
`

export const StyledCancelButton = styled.button`
  background-color: #ffffff;
  margin-bottom: 55px;
  height: 50px;
  border: 1px solid #4a56e2;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${respondTo.sm`
  margin-left: auto;
  margin-right: auto;
     width: 300px;
	 margin-bottom: 60px;
    `}
  &:focus {
    background: var(--activeColor);
    color: var(--background);
    background-image: linear-gradient(315deg, #4a56e2 0%, #ffd8d0a6 74%);
  }
  &:hover {
    box-shadow: -4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px 4px 6px 0 rgba(116, 125, 139, 0.5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
      inset -4px -4px 6px 0 rgba(0, 0, 0, 0.4);
  }
`
