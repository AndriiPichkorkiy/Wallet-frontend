import React from 'react'
// import Select from './Select/Select'
import Selector from './Selector/Selector'
// import Table from './Table/Table'
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
  { id: '12', name: 'December' }
  // { id: '', name: 'All' }
]

// const years = [
//   { id: '2022', name: '2022' },
//   { id: '2021', name: '2021' },
//   { id: '2020', name: '2020' },
//   { id: '2019', name: '2019' }
// ]

const makeYears = () => {
  const years = []
  const currentYear = new Date().getFullYear()
  for (let i = currentYear; i >= 1970; i -= 1) {
    years.push({ id: i, name: i })
  }
  return years
}

const years = makeYears()

const StatsTable = ({ statistics, totalData, onChange }) => {
  return (
    <Container>
      <SelectionWrapper>
        {/* <Select
          list={months}
          title={'Month'}
          name={'month'}
          onChange={onChange}
        /> */}
        <Selector
          list={months}
          title={'Month'}
          name={'month'}
          onChange={onChange}
        />
        <Selector
          list={years}
          title={'Year'}
          name={'year'}
          onChange={onChange}
        />
      </SelectionWrapper>
      {/* <Table statistics={statistics} totalData={totalData} /> */}
    </Container>
  )
}

export default StatsTable
