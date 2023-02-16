import styled from 'styled-components'
import { respondTo } from '../../helpers/respondTo'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 32px;
  ${respondTo.sm`
  margin-top: 0;
    transform: translateY(-32px);
  `}
  ${respondTo.lg`
  margin-top: 0;
    transform: translateY(0);
  `}
`
export const SelectionWrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;
  ${respondTo.sm`
  margin-top: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
  `}
`
