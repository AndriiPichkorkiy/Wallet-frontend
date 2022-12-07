import styled from 'styled-components'

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: #fff;
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
    border-top: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
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

export const Total = styled.div``
export const TotalList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
export const TotalItem = styled.li``
export const TotalTitle = styled.span``
export const TotalAmount = styled.span``
