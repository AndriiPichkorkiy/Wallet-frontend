import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBalance } from '../../redux/finance/financeSlice'
import { useLazyGetAllTransactionsQuery } from '../../services/transactionsApi'
import { Wrapp, Text, BalanceH2, Currenty } from './Balance.styled'

const Balance = () => {
  const dispatch = useDispatch()
  const [getBalance] = useLazyGetAllTransactionsQuery()
  const balance = useSelector(state => state.finance)

  useEffect(() => {
    const currentBalance = async () => {
      const balance = await getBalance().unwrap()
      dispatch(setBalance(balance[0].balance))
    }
    currentBalance()
  }, [])

  return (
    <Wrapp>
      <Text>Your balance</Text>
      <BalanceH2>
        <Currenty>&#8372;</Currenty> {balance}
      </BalanceH2>
    </Wrapp>
  )
}
export default Balance
