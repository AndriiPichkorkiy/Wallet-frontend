import {
  //   StyledAddTransitionButton,
  ContainerAddTransitionButton
} from './Buttons.styled'
import ButtonAddTransactions from './buttonAddTransactions'
// window.isModalAddTransactionOpen=false
//  і вішає його на сірий фон, кнопку Escape
export const AddTransModalBtn = ({ onClick }) => {
  return (
    <ContainerAddTransitionButton onClick={onClick}>
      <ButtonAddTransactions />
    </ContainerAddTransitionButton>
  )
}
