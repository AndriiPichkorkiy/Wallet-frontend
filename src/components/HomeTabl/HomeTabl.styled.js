import styled from 'styled-components'
import { respondTo } from '../../helpers/respondTo'

export const ContainerTabl = styled.div`
  /* margin: 32px 0 0 0; */
  ${respondTo.sm`margin: 20px 32px 0 32px`}
  ${respondTo.lg`margin: 46px 16px 0 70px`};
`
export const StyledGridOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`
