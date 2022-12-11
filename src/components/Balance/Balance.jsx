import { useSelector } from 'react-redux'
import { Wrapp, Text, BalanceH2, Currenty } from './Balance.styled'

const Balance = () => {
  const balance = useSelector(state => state.finance)

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
