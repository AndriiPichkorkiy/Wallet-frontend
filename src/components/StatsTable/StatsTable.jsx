import React from 'react'
import Selector from './Selector/Selector'
import Table from './Table/Table'
import { Container, SelectionWrapper } from './StatsTable.styled'

// const colors = [
//   'rgba(254, 208, 87, 1)',
//   'rgba(255, 216, 208, 1)',
//   'rgba(253, 148, 152, 1)',
//   'rgba(197, 186, 255, 1)',
//   'rgba(110, 120, 232, 1)',
//   'rgba(74, 86, 226, 1)',
//   'rgba(129, 225, 255, 1)',
//   'rgba(36, 204, 167, 1)',
//   'rgba(0, 173, 132, 1)'
// ]

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
  { id: '13', name: 'All' }
]

const years = [
  { id: '2022', name: '2022' },
  { id: '2021', name: '2021' },
  { id: '2020', name: '2020' },
  { id: '2019', name: '2019' }
]

const StatsTable = ({ statistics, totalData, onChange }) => {
  return (
    <Container>
      <SelectionWrapper>
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
      <Table statistics={statistics} totalData={totalData} />
    </Container>
  )
}

export default StatsTable
