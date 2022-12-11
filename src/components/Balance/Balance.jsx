import React, { useEffect } from 'react'
import { setBalance } from '../../redux/finance/financeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useLazyGetStatsByPeriodQuery } from '../../services/statsApi'
import { Wrapp, Text, BalanceH2, Currenty } from './Balance.styled'

const Balance = () => {
  const dispatch = useDispatch()
  const currentMonth = new Date().getMonth() + 1
  const currentYear = new Date().getFullYear()
  const [getBalance] = useLazyGetStatsByPeriodQuery()
  const balance = useSelector(state => state.finance)

  useEffect(() => {
    const fetchBalance = async () => {
      const data = await getBalance(
        `year=${currentYear}&month=${currentMonth}`
      ).unwrap()
      dispatch(setBalance(data.totalStats.totalBalance))
    }
    fetchBalance()
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
