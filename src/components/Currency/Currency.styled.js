import styled from 'styled-components'
import { respondTo } from '../../helpers/respondTo.js'

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 174px;
  border-radius: 30px;
  overflow: hidden;
  ${respondTo.sm`
    margin-bottom: 20px;
    width: 336px;
    height: 182px;
  `}
  ${respondTo.lg`
      width: 393px;
      height: 331px;
    `}
`

export const TableCurrency = styled.table`
  background: ${({ theme }) => theme.colors.activeColor};
  text-align: center;
  width: 100%;
  table-layout: fixed;
  border-spacing: 0;
  font-family: arial;
  width: 280px;
  height: 174px;
  background: ${({ theme }) => theme.colors.activeColor};
  border-radius: 30px;
  overflow: hidden;
  ${respondTo.sm`
      width: 336px;
        height: 182px;
    `}
  ${respondTo.lg` 
    width: 393px;
        height: 331px;
    `}
`

export const ImgCurrency = styled.img`
  width: 280px;
  height: 93px;
  left: 0;
  bottom: 0;
  position: absolute;

  ${respondTo.sm`
     width: 336px;
    height: 119px;
    `}
  ${respondTo.lg`    
    bottom: 0px;
        width: 393px;
        height: 134px;
    `}
`

export const TableHeader = styled.thead`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.overlay} -8.67%,
    ${({ theme }) => theme.colors.overlay} 116.22%
  );
  color: ${({ theme }) => theme.colors.background};
`

export const TableHeaderCell = styled.th`
  padding-top: 17px;
  padding-bottom: 16px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.background};
  ${respondTo.sm`
     padding-top: 11px;
    padding-bottom: 12px;
    `}
  ${respondTo.lg`
    padding-top: 17px;
    padding-bottom: 16px;
    `}
`

export const TableBodyCell = styled.tbody`
  position: relative;
`

export const TableBody = styled.tbody`
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0%;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.background};
  ${respondTo.lg`
        height: 120px;
        :first-of-type td {
            height: 0px;
            padding-top: 20px;
            padding: 0px;
        }
    `}
`

export const TableLoader = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.background};
`
