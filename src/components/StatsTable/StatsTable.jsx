import React from 'react'
import Select from './Select/Select'
import Table from './Table/Table'
import { Container, SelectionWrapper } from './StatsTable.styled'

const months = [
  { id: '1', name: 'January' },
  { id: '2', name: 'February' },
  { id: '3', name: 'March' },
  { id: '4', name: 'April' },
  { id: '5', name: 'May' },
  { id: '6', name: 'June' },
  { id: '7', name: 'July' },
  { id: '8', name: 'August' },
  { id: '9', name: 'September' },
  { id: '10', name: 'October' },
  { id: '11', name: 'November' },
  { id: '12', name: 'December' },
  { id: '0', name: 'All' }
]

const makeYears = () => {
  const years = []
  const currentYear = new Date().getFullYear()
  for (let i = currentYear; i >= 1970; i -= 1) {
    years.push({ id: i, name: i })
  }
  return years
}

const years = makeYears()

const makeMonthName = array => {
  const currentMonth = new Date().getMonth()
  const monthName = array[currentMonth]
  return monthName.name
}

const month = makeMonthName(months)

const StatsTable = ({ statistics, totalData, onChange }) => {
  return (
    <Container>
      <SelectionWrapper>
        <Select
          list={months}
          title={month}
          name={'month'}
          onChange={onChange}
        />
        <Select
          list={years}
          title={new Date().getFullYear()}
          name={'year'}
          onChange={onChange}
        />
      </SelectionWrapper>
      <Table statistics={statistics} totalData={totalData} />
    </Container>
  )
}

export default StatsTable
