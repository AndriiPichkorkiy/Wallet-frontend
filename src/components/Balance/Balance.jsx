import { Wrapp, Text, BalanceH2, Currenty} from "./Balance.styled";

const Balance = () =>{
    
    
    return (
        <Wrapp>
            <Text>Your balance</Text>
            <BalanceH2><Currenty>&#8372;</Currenty> 24 000.00</BalanceH2>
        </Wrapp>
    )
}
export default Balance;