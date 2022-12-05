import styled from 'styled-components'
import { respondTo } from '../../helpers/respondTo'

export const ContainerTabl = styled.div`
  /* margin: 32px 0 0 0; */
  /* ${respondTo.sm`margin: 20px 0 0 0`} */
  ${respondTo.lg`margin: 46px 0; width: 715px`}
`
export const StyledGridOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`
