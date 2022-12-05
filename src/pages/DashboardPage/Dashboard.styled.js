import styled from 'styled-components'
import { respondTo } from '../../helpers/respondTo'

export const MainContainer = styled.div`
  padding: 12px 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${respondTo.sm`
   align-items: normal;
    width: 768px;
    padding: 32px 32px;`}

  ${respondTo.lg`
  flex-direction: row;
align-items:flex-start;
    width: 1200px;
    padding: 0px 16px;`}
`
