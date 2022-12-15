import React, { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useDispatch } from 'react-redux'

import * as Yup from 'yup'
import { ErrorMessage } from 'formik'
import moment from 'moment'
import { Notify } from 'notiflix'

import { useLazyGetBalanceQuery } from '../../services/statsApi'
import {
  useGetCategoryQuery,
  useAddTransactionsMutation
} from '../../services/transactionsApi'

import {
  BackDrop,
  ModalBox,
  Title,
  StyledForm,
  FormikForm,
  IncomeExpenseContainer,
  LabelIncome,
  SwitchInput,
  LabelExpense,
  StyledInput,
  StyledTextarea,
  StyledDatetime,
  AddButton,
  CancelButton,
  StyledDateIcon,
  WrapperInput, CloseModalBtn
} from './ModalTransactions.styled'
import { StyledErrorMsg } from '../RegistrationForm/RegistrationForm.styled'
import ButtonExpense from './Buttons/buttonExpense'
import ButtonAddTransactions from './Buttons/buttonAddTransactions'
import Select from '../StatsTable/Select/Select'
// import Header from '../Header/Header'
import SvgIcon from '../../assets/images/icons/date_range.svg'
import { setBalance } from '../../redux/finance/financeSlice'
import CloseModal from '../../assets/images/icons/closeModal.svg'
const portal = document.querySelector('#portal')

const tomorrow = moment().subtract(0, 'day')
const validDate = current => current.isBefore(tomorrow)

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
  const { data: categories, isLoading: isCategoryLoading } =
    useGetCategoryQuery()
  const [getBalance] = useLazyGetBalanceQuery()
  const [newTransaction] = useAddTransactionsMutation()
  const [state, setState] = useState(initialValue)
  const [transactionType, setTransactionType] = useState(false)
  const [date, setDate] = useState(Date.now())
  const [categoriesList, setCategoriesList] = useState([])
  const { amount, category, comment } = state

  useEffect(() => {
    // window.addEventListener('scroll', e => {
    //   window.scrollTo(0, 0)
    // })

    // const el = document.querySelector('main')
    // el.style.position = 'fixed'

    document.addEventListener('keydown', closeByEscape)
    return () => {
      // el.style.position = 'static'
      document.removeEventListener('keydown', closeByEscape)
    }
  })

  useEffect(() => {
    if (!transactionType) {
      const filteredCategories = categories?.filter(
        item => item.id !== '10501' && item.id !== '10502'
      )
      setCategoriesList(filteredCategories)
    } else {
      const filteredCategories = categories?.filter(
        item => item.id === '10501' || item.id === '10502'
      )
      setCategoriesList(filteredCategories)
    }
  }, [categories, transactionType])

  const closeByEscape = useCallback(e => {
    if (e.key === 'Escape') closeModal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onCloseBtnClick = () => {
    closeModal()
  }

  const onSubmit = async (e) => {
    if (!amount || !category) {
      Notify.failure('Please fill in all fields')
      return
    }
    if (comment.length > 100) {
      Notify.failure('Comment must be less than 100 characters')
      return
    }
    const newTransactionData = {
      amount,
      category,
      comment,
      type: transactionType,
      date: date
    }
    const result = await newTransaction(newTransactionData)
    if (result.error) {
      Notify.warning(result.error.data.message);
      return

    }
    if (result) {
      Notify.info('Transaction successful!')
      setState(initialValue)
      closeModal()
    }
    const balance = await getBalance().unwrap()
    dispatch(setBalance(balance))
    closeModal()
  }

  const handleChange = ({ target: { name, value } }) => {
    const amountReg = /^[0-9]{0,7}([.,][0-9]{0,2})?$/
    const commentReg = /^[a-zA-Zа-яА-Я0-9\s.,!?-~@/|\\&$<>()-=]{0,251}$/

    switch (name) {
      case 'amount':
        const regex = new RegExp(amountReg)
        if (regex.test(value)) {
          setState(prev => ({ ...prev, [name]: value }))
        }
        break
      case 'comment':
        const regexComment = new RegExp(commentReg)
        if (regexComment.test(value)) {
          setState(prev => ({ ...prev, [name]: value }))
        }

        break
      default:
        setState(prev => ({ ...prev, [name]: value }))
    }
  }
  const handleCategoryChange = (name, value) => {
    setState(prev => ({ ...prev, [name]: value }))
  }

  const BtnSubmit = <AddButton type='submit' id={'addBtn'}>
    add
  </AddButton>

  return createPortal(
    <BackDrop
      onClick={e => {
        if (e.target === e.currentTarget) closeModal()
      }}
    >
      <ModalBox className={'modalLogout'}><CloseModalBtn src={CloseModal}
        width='16px'
        alt='CloseModalBtn' onClick={() => closeModal()} />
        <Title>Add transaction</Title>
        <StyledForm
          onSubmit={(data) => {
            const addBtn = document.getElementById('addBtn')
            addBtn.disabled = true
            onSubmit(data).finally(() => {
              addBtn.disabled = false
            })
          }}
          // enableReinitialize={false}
          initialValues={{ ...state }}
          validationSchema={ValidationSchema}
        >
          {({ errors, touched }) => (
            <FormikForm>
              <IncomeExpenseContainer>
                <LabelIncome
                  style={
                    transactionType
                      ? { color: '#24CCA7' }
                      : { color: '#E0E0E0' }
                  }
                >
                  Income
                </LabelIncome>
                <SwitchInput
                  onChange={transactionType => {
                    setTransactionType(transactionType)
                  }}
                  checked={transactionType}
                  offColor='#E0E0E0'
                  offHandleColor='#FF6596'
                  onColor='#E0E0E0'
                  onHandleColor='#24CCA7'
                  handleDiameter={44}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  uncheckedHandleIcon={<ButtonExpense />}
                  checkedHandleIcon={<ButtonAddTransactions />}
                  boxShadow='  -4px -4px 4px 0px rgba(0, 0, 0, 0.25)'
                  height={40}
                  width={80}
                />

                <LabelExpense
                  style={
                    transactionType
                      ? { color: '#E0E0E0' }
                      : { color: '#FF6596' }
                  }
                >
                  Expense
                </LabelExpense>
              </IncomeExpenseContainer>
              <Select
                name={'category'}
                onChange={handleCategoryChange}
                list={categoriesList ?? []}
                title={'Select a category'}
                isModal={true}
                isLoading={isCategoryLoading}
              />
              <WrapperInput>
                <StyledInput
                  name='amount'
                  value={amount}
                  onChange={handleChange}
                  placeholder='0.00'
                  required
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
                    inputProps={{ readOnly: true }}
                    isValidDate={validDate}
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
              {errors.comment && touched.comment ? (
                <StyledErrorMsg>{errors.comment}</StyledErrorMsg>
              ) : null}
              {/* <AddButton type='submit' id={'addBtn'}>
                add
              </AddButton> */}
              {BtnSubmit}
              <CancelButton onClick={() => onCloseBtnClick()} type='button'>
                cancel
              </CancelButton>
            </FormikForm>
          )}
        </StyledForm>
      </ModalBox>
    </BackDrop>,
    portal
  )
}

export default ModalTransactions
