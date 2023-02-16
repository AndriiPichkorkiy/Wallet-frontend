import styled from 'styled-components'

export const TableWrapper = styled.div`
  width: 100%;
`

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 30px;
  width: 100%;
  height: 58px;
  padding: 0 20px;
`

export const Title = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.mainText};
`
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`

export const ListItem = styled.li`
  position: relative;
  display: flex;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: center;
`
export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding-left: 16px;
  // margin-left: 16px;
  justify-content: space-between;
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-top: 1px solid ${({ theme }) => theme.colors.muiBorderBottom};
    box-shadow: 0px 1px 0px ${({ theme }) => theme.colors.muiBoxShadow};
  }
`

export const Square = styled.div`
  // margin-right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 2px;
`
export const CategoryName = styled.h4`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
`
export const CategoryAmount = styled.h4`
  margin-left: 10px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  text-align: right;
`

export const TotalItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.mainText};
`
export const TotalTitle = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.mainText};
`
export const TotalExpenses = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: ${({ theme }) => theme.colors.accentSecondary};
`
export const TotalIncome = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: ${({ theme }) => theme.colors.accentPrimary};
`
