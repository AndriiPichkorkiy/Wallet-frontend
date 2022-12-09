import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import './buttons.styled.js'
import ButtonAddTransactions from './Buttons/buttonAddTransactions'
import {
  BackdropContainer,
  ModalTransactionsContainer,
  StyledForm,
  TitleTransactions,
  IncomeExpensContainer,
  LabelIncome,
  SwitchInput,
  LabelExpense,
  StyledInput,
  StyledTextarea,
  StyledDatetime,
  StyledAddButton,
  StyledCancelButton,
  StyledAddButtonText,
  StyledCancelButtonText,
  StyledDateIcon
} from './ModalTransactionsComponents'
import SvgIcon from '../../assets/images/icons/date_range.svg'
import ButtonExpense from './Buttons/buttonExpense'
import {
  UnstyledSelectCustomRenderValue,
  StyledSelectCustomRenderValue
} from './SelectStyled'

// const data={
//     "type": true,
//     "category": 10105,
//     "comment": "First comment",
//     "amount": 555.55,
//     "date": 1670170243028
// }

const ModalTransactions = ({ closeModal }) => {
  const [type, setTyped] = useState(false)
  const [date, setDate] = useState(Date.now())
  useEffect(() => {
    document.addEventListener('keydown', closeByEscape)
    return () => {
      document.removeEventListener('keydown', closeByEscape)
    }
  })
  const closeByEscape = e => {
    if (e.key === 'Escape') closeModal()
  }

  const formik = useFormik({
    initialValues: {
      amount: '',
      category: '',
      comment: '',
      type: type,
      date: date
    },
    validationSchema: Yup.object({
      amount: Yup.number()
        .required('Please enter amount')
        .positive()
        .integer()
        .max(1000000),
      category: Yup.string(),
      comment: Yup.string(),
      type: Yup.boolean().required(),
      date: Yup.string().required()
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(JSON.stringify(values, null, 2))
      console.log('type', type)
      console.log('date', date)
      resetForm()
      if (values.amount) {
        alert('transaction successful')
        closeModal()
      }
    }
  })
  const IV = { ...formik.values, date, type }
  console.log('IV', IV)

  return (
    <BackdropContainer
      onClick={e => {
        if (e.target === e.currentTarget) closeModal()
      }}
    >
      <ModalTransactionsContainer>
        <TitleTransactions>Add transaction</TitleTransactions>

        <StyledForm
          onSubmit={formik.handleSubmit}
          initialValues={IV}
          validationSchema={formik.validationSchema}
        >
          <IncomeExpensContainer>
            <LabelIncome
              style={type ? { color: '#24CCA7' } : { color: '#E0E0E0' }}
            >
              Income
            </LabelIncome>

            <SwitchInput
              onChange={type => {
                setTyped(type)
                formik.values.category = ''
              }}
              checked={type}
              offColor='#E0E0E0'
              offHandleColor='#FF6596'
              onColor='#E0E0E0'
              onHandleColor='#24CCA7'
              handleDiameter={44}
              uncheckedIcon={false}
              checkedIcon={false}
              uncheckedHandleIcon={<ButtonExpense />}
              checkedHandleIcon={<ButtonAddTransactions />}
              // boxShadow="0px 6px 15px rgba(255, 101, 150, 0.5)"
              boxShadow='  -4px -4px 4px 0px rgba(0, 0, 0, 0.25)'
              // activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={40}
              width={80}
            />

            <LabelExpense
              style={type ? { color: '#E0E0E0' } : { color: '#FF6596' }}
            >
              Expense
            </LabelExpense>
          </IncomeExpensContainer>
          {type && (
            <UnstyledSelectCustomRenderValue
              name='category'
              value={formik.values.category}
              onChange={formik.handleChange}
            />
          )}
          {!type && (
            <StyledSelectCustomRenderValue
              name='category'
              value={formik.values.category}
              onChange={formik.handleChange}
            />
          )}

          <StyledInput
            name='amount'
            value={formik.values.amount}
            onChange={formik.handleChange}
            placeholder='0.00'
          />
          <div style={{ position: 'relative' }}>
            <StyledDatetime
              onChange={date => setDate(date)}
              dateFormat='DD.MM.YYYY'
              timeFormat={false}
              value={date}
              name='datetime'
              closeOnClickOutside
            />
            <StyledDateIcon src={SvgIcon} width='24px' alt='datetimeIcon' />
          </div>

          <StyledTextarea
            name='comment'
            value={formik.values.comment}
            placeholder='Comment'
            onChange={formik.handleChange}
          />
          <StyledAddButton type='submit'>
            <StyledAddButtonText>Add</StyledAddButtonText>
          </StyledAddButton>
          <StyledCancelButton type='button'>
            <StyledCancelButtonText>Cancel</StyledCancelButtonText>
          </StyledCancelButton>
        </StyledForm>
      </ModalTransactionsContainer>
    </BackdropContainer>
  )
}

export default ModalTransactions