import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setBalance } from '../redux/finance/financeSlice'
import { useLazyGetBalanceQuery } from '../services/statsApi'

// const Balance = () => {
//   const dispatch = useDispatch()
//   const [getBalance] = useLazyGetBalanceQuery()

//   const currentBalance = async () => {
//     const balance = await getBalance().unwrap()
//     dispatch(setBalance(balance))
//   }
// }
// export default Balance

export default function useBalance() {
  const dispatch = useDispatch()
  const [getBalance] = useLazyGetBalanceQuery()
  const [state, setState] = useState(async () => {
    const balance = await getBalance().unwrap()
    return setState(balance)
  })
  dispatch(setBalance(state))

  return [state]
}
