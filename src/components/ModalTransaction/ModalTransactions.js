import React, { useEffect, useState } from 'react'
import { Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import moment from 'moment'
import { Notify } from 'notiflix'
import { useAddTransactionsMutation } from '../../services/transactionsApi'
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
  StyledDateIcon,
  WrapperInput
} from './ModalTransactionsComponents'
import SvgIcon from '../../assets/images/icons/date_range.svg'
import ButtonExpense from './Buttons/buttonExpense'
import {
  UnstyledSelectCustomRenderValue,
  StyledSelectCustomRenderValue
} from './SelectStyled'

import { StyledErrorMsg } from '../RegistrationForm/RegistrationForm.styled'

import { useDispatch } from 'react-redux'
import { useLazyGetBalanceQuery } from '../../services/statsApi'
import { setBalance } from '../../redux/finance/financeSlice'

const yesterday = moment().subtract(1, 'day')

const initialValue = {
  amount: '',
  category: '',
  comment: '',
  type: false,
  date: Date.now()
}

const ValidationSchema = Yup.object().shape({
  amount: Yup.number().positive().truncate(),
  category: Yup.number(),
  comment: Yup.string(),
  type: Yup.boolean(),
  date: Yup.string()
})

const ModalTransactions = ({ closeModal }) => {
  const dispatch = useDispatch()
  const [getBalance] = useLazyGetBalanceQuery()

  const [newtransaction] = useAddTransactionsMutation()
  const [state, setState] = useState(initialValue)
  const [type, setTyped] = useState(false)
  const [date, setDate] = useState(Date.now())
  console.log(date)
  useEffect(() => {
    document.addEventListener('keydown', closeByEscape)
    return () => {
      document.removeEventListener('keydown', closeByEscape)
    }
  })
  const closeByEscape = e => {
    if (e.key === 'Escape') closeModal()
  }

  const onCloseBtnClick = () => {
    closeModal()
  }
  const handleChange = ({ target }) => {
    const { name, value } = target
    let newValue = value
    let nums = []
    if (name === 'amount') {
      for (let i = 0; i < 1000000; i += 1) {
        nums.push(i)
        nums.push('.')
        nums.push(',')
      }
      if (!nums.includes(Math.round(Number(value)))) {
        return Notify.failure('Invalid amount,only digits')
      }
      setState(prevState => ({
        ...prevState,
        amount: newValue
      }))
      return
    }

    setState(prevState => ({
      ...prevState,
      [name]: newValue
    }))

    // if(date+120000<=Date.now()) { return Notify.failure('you choosen a date in the past')}
  }
  const { amount, category, comment } = state
  const IV = {
    amount: Math.round(Number(amount)),
    category,
    comment,
    type,
    date
  }

  console.log('IV :>> ', IV)

  const onSubmit = async (values, { resetForm }) => {
    try {
      if (amount === '') {
        return Notify.failure('please entry amount')
      }
      if (comment.length > 100) {
        return Notify.failure('too long comment')
      }

      const result = await newtransaction(IV)

      resetForm()
      if (amount) {
        Notify.info('transaction successful')
        closeModal()
      }
      const balance = await getBalance().unwrap()
      dispatch(setBalance(balance))

      return result
    } catch (error) {
      Notify.failure(error)
    }
  }

  return (
    <>
      <BackdropContainer
        onClick={e => {
          if (e.target === e.currentTarget) closeModal()
        }}
      >
        <ModalTransactionsContainer>
          <TitleTransactions>Add transaction</TitleTransactions>
          <StyledForm
            onSubmit={onSubmit}
            initialValues={initialValue}
            validationSchema={ValidationSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <IncomeExpensContainer>
                  <LabelIncome
                    style={type ? { color: '#24CCA7' } : { color: '#E0E0E0' }}
                  >
                    Income
                  </LabelIncome>
                  <SwitchInput
                    onChange={type => {
                      setTyped(type)
                      console.log(type, 'type')
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
                {/* {type && (
                  <UnstyledSelectCustomRenderValue
                    name='category'
                    value={category}
                    onChange={handleChange}
                  />
                )}
                {!type && (
                  <StyledSelectCustomRenderValue
                    name='category'
                    value={category}
                    onChange={handleChange}
                  />
                )} */}
                <WrapperInput>
                  <StyledInput
                    name='amount'
                    value={amount}
                    onChange={handleChange}
                    placeholder='0.00'
                    required
                    // pattern='^[0-9]*$'
                  />
                  {!amount && (
                    <ErrorMessage
                      render={msg => <StyledErrorMsg>{msg}</StyledErrorMsg>}
                      name='amount'
                    />
                  )}
                  <div
                    style={{
                      position: 'relative'
                    }}
                  >
                    <StyledDatetime
                      isValidDate={current => current.isAfter(yesterday)}
                      onChange={date => setDate(date)}
                      dateFormat='DD.MM.YYYY'
                      timeFormat={false}
                      value={date}
                      name='datetime'
                      closeOnClickOutside
                      closeOnSelect={true}
                    />
                    <StyledDateIcon
                      src={SvgIcon}
                      width='24px'
                      alt='datetimeIcon'
                    />
                  </div>
                </WrapperInput>

                <StyledTextarea
                  name='comment'
                  value={comment}
                  placeholder='Comment'
                  onChange={handleChange}
                />
                {/* {errors.comment && touched.comment ? (
                  <StyledErrorMsg>{errors.comment}</StyledErrorMsg>
                ) : null} */}
                <StyledAddButton type='submit'>
                  <StyledAddButtonText>Add</StyledAddButtonText>
                </StyledAddButton>
                <StyledCancelButton
                  onClick={() => onCloseBtnClick()}
                  type='button'
                >
                  <StyledCancelButtonText>Cancel</StyledCancelButtonText>
                </StyledCancelButton>
              </Form>
            )}
          </StyledForm>
        </ModalTransactionsContainer>
      </BackdropContainer>
    </>
  )
}

export default ModalTransactions
