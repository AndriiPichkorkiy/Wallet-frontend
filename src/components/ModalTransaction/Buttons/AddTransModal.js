import { StyledAddTransitionButton, ContainerAddTransitionButton } from '../buttons.styled'
import ButtonAddTransactions from './buttonAddTransactions'
// window.isModalAddTransactionOpen=false
//  і вішає його на сірий фон, кнопку Escape
export const AddTransModalBtn = ({ onClick }) => {

    return (<ContainerAddTransitionButton onClick={onClick}>
      
        <StyledAddTransitionButton
        ><ButtonAddTransactions /></StyledAddTransitionButton>
    </ContainerAddTransitionButton>)
}