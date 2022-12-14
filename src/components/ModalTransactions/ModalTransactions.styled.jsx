import styled from 'styled-components'
import { respondTo } from '../../helpers/respondTo'

export const Overlay = styled.div`
  background-color: var(--overlay);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

export const ModalBox = styled.div`
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 15px;
  border-radius: 20px;
  ${respondTo.sm`
        padding: 20px 80px;
    `}
`
