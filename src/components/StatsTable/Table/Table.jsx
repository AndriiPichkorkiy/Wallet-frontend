import React from 'react'

import {
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

const colors = [
  'rgba(254, 208, 87, 1)',
  'rgba(255, 216, 208, 1)',
  'rgba(253, 148, 152, 1)',
  'rgba(197, 186, 255, 1)',
  'rgba(110, 120, 232, 1)',
  'rgba(74, 86, 226, 1)',
  'rgba(129, 225, 255, 1)',
  'rgba(36, 204, 167, 1)',
  'rgba(0, 173, 132, 1)'
]

const Table = ({ statistics, totalData }) => {
  return (
    <>
      <Head>
        <Title>Category</Title>
        <Title>Sum</Title>
      </Head>
      <List>
        {statistics.map(item => (
          <ListItem key={item.id}>
            <Square style={{ backgroundColor: colors[item.id - 1] }} />
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
    </>
  )
}

export default Table
