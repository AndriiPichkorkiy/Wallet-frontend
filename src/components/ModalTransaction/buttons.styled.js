/* //////////// BUTTTON*/
import { respondTo } from '../../helpers/respondTo'
import styled from 'styled-components'
export const ContainerAddTransitionButton = styled.div`
  ${respondTo.sm`
     margin-bottom: 40px;
  margin-right: 40px; 
    `}
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  margin-right: 20px;
  z-index: 10;
`
export const StyledAddTransitionButton = styled.div`
  width: 44px;
  height: 44px;
  background: #24cca7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export const ButtonMinus = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  /* margin-bottom: 40px;
  margin-right: 40px; */

  /* width: 44px; */
`

export const ButtonPlus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export const ButtonPlusCrist = styled.div`
  background-color: #fff;
  height: 2px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const VerticalAlign = styled.div`
  background-color: #fff;
  height: 20px;
  width: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`
