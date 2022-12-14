import React from 'react'

import {
  TableWrapper,
  Head,
  Title,
  List,
  ListItem,
  Category,
  CategoryName,
  CategoryAmount,
  Square,
  TotalItem,
  TotalTitle,
  TotalExpenses,
  TotalIncome
} from './Table.styled'

const Table = ({ statistics, totalData }) => {
  return (
    <TableWrapper>
      <Head>
        <Title>Category</Title>
        <Title>Sum</Title>
      </Head>
      <List>
        {statistics.map(item => (
          <ListItem key={item.id}>
            <Square style={{ backgroundColor: item.color }} />
            <Category>
              <CategoryName>{item.name}</CategoryName>
              <CategoryAmount>{item.quantity}</CategoryAmount>
            </Category>
          </ListItem>
        ))}
      </List>

      <List>
        <TotalItem>
          <TotalTitle>Expenses:</TotalTitle>
          <TotalExpenses>{totalData.expenses}</TotalExpenses>
        </TotalItem>
        <TotalItem>
          <TotalTitle>Income:</TotalTitle>
          <TotalIncome>{totalData.income}</TotalIncome>
        </TotalItem>
      </List>
    </TableWrapper>
  )
}

export default Table
