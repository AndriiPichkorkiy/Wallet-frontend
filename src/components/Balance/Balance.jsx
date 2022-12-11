import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBalance } from '../../redux/finance/financeSlice'
import { useLazyGetBalanceQuery } from '../../services/statsApi'
import { Wrapp, Text, BalanceH2, Currenty } from './Balance.styled'

const Balance = () => {
  const dispatch = useDispatch()
  const [getBalance] = useLazyGetBalanceQuery()
  const balance = useSelector(state => state.finance.balance)

  useEffect(() => {
    const currentBalance = async () => {
      const balance = await getBalance().unwrap()
      dispatch(setBalance(balance))
    }
    currentBalance()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

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
