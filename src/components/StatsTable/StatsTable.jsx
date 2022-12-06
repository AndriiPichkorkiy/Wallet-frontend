import React from 'react'
import Selector from './Selector/Selector'
import { Wrapper } from './StatsTable.styled'

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

const months = [
  { id: '01', name: 'January' },
  { id: '02', name: 'February' },
  { id: '03', name: 'March' },
  { id: '04', name: 'April' },
  { id: '05', name: 'May' },
  { id: '06', name: 'June' },
  { id: '07', name: 'July' },
  { id: '08', name: 'August' },
  { id: '09', name: 'September' },
  { id: '010', name: 'October' },
  { id: '012', name: 'November' },
  { id: '013', name: 'December' },
  { id: '014', name: 'All' }
]

const years = [
  { id: '2022', name: '2022' },
  { id: '2021', name: '2021' },
  { id: '2020', name: '2020' },
  { id: '2019', name: '2019' }
]
const StatsTable = ({ statistics, totalData }) => {
  const [month, setMonth] = React.useState('')
  const [year, setYear] = React.useState('')

  const handleChange = ({ target: { name, value } }) => {
    // console.dir('name', name, 'value', value)
    switch (name) {
      case 'month':
        return setMonth(value)
      case 'year':
        return setYear(value)
      default:
        return
    }
  }

  return (
    <Wrapper>
      <Selector
        list={months}
        title={'Month'}
        name={'month'}
        onChange={handleChange}
      />
      {/* <Selector
        list={years}
        title={'Year'}
        name={'year'}
        onChange={handleChange}
      /> */}
    </Wrapper>
  )
}

export default StatsTable
