import styled from 'styled-components'
import { respondTo } from '../../helpers/respondTo'

import Switch from 'react-switch'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import { Formik, Form } from 'formik'
import { Field } from 'formik'

export const BackDrop = styled.div`
  background-color: var(--overlay);
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  overflow: hidden;
  ${respondTo.sm`
  top: 0;
  `}
`

export const ModalBox = styled.div`
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;

  // background-color: teal;

  ${respondTo.sm`
    padding: 40px 72px 60px;
    // padding-bottom: 60px;
    width: 540px;
    border-radius: 20px;
    height: 603px;
  `}
`
export const Title = styled.h2`
  margin-bottom: 40px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  ${respondTo.sm`font-size: 30px;
line-height: 45px;`}
`
export const StyledForm = styled(Formik)`
  // display: flex;
  // flex-direction: column;
  // margin: 0 10px;
  // ${respondTo.sm`padding-left: 73px; padding-right: 73px`}
`
export const FormikForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const IncomeExpenseContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  ${respondTo.sm`flex-direction: row;`}
`
export const StyledInput = styled(Field)`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #bdbdbd;
  padding-left: 20px;
  padding-bottom: 8px;
  outline: none;
  border: none;
  border-bottom: #e0e0e0 1px solid;
  background-color: transparent;
  margin-top: 20px;
  margin-bottom: 40px;
  margin-right: 32px;
  ${respondTo.sm`width: 180px;
  margin-top: 16px;
  height: 32px;`}
`

export const StyledDatetime = styled(Datetime)`
  font-family: 'Circe';
  font-size: 18px;
  outline: none;
  padding-left: 20px;
  padding-bottom: 8px;
  border: none;
  border-bottom: #e0e0e0 1px solid;
  margin-bottom: 40px;
  background-color: transparent;

  & > input {
    font-family: 'Circe';
    font-size: 18px;
    outline: none;
    border: none;
    width: 100%;
  }
  ${respondTo.sm`
  flex-direction: row;
  margin-top: 16px;
  height: 32px;
  `}
`
export const StyledDateIcon = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 16px;
  pointer-events: none;
  background-color: transparent;

  ${respondTo.sm`
    transform: translate(0, 75%);
  `}
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
  margin-bottom: 40px;
  height: 84px;
  background-color: transparent;

  ${respondTo.sm`
  height: 32px;
  `}
`
export const AddButton = styled.button`
  width: 300px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  background-color: #24cca7;
  border: none;
  border-radius: 20px;
  color: #ffffff;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

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

export const CancelButton = styled.button`
  width: 300px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  background-color: transparent;
  color: #4a56e2;
  border: 1px solid #4a56e2;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;

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
