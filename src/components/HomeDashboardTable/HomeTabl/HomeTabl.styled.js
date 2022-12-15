import styled from 'styled-components'
import { respondTo } from '../../../helpers/respondTo'

export const ContainerTable = styled.div`
  width: 100%;
  height: 100%;
  ${respondTo.lg`margin: 46px 0 0 70px; padding-bottom: 60px;`}
`
export const StyledGridOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`
export const EmptyContainer = styled.div`
  ${respondTo.sm`height: 72px`}
  ${respondTo.lg`height: 0`}
`
