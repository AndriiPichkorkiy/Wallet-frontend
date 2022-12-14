import React, { useState, useEffect } from 'react'
import { useLazyGetStatsByPeriodQuery } from '../../services/statsApi'

import StatsTable from '../StatsTable/StatsTable'
import Chart from '../Chart/Chart'

import { LoaderWrapper } from '../Loader/Loader'

import {
  StatsTitle,
  StatsWrapper,
  DiagramWrapper,
  Container
} from './DiagramTab.styled'
import { Notify } from 'notiflix'

const colors = [
  { id: 10101, color: 'rgba(254, 208, 87, 1)' },
  { id: 10102, color: 'rgba(255, 216, 208, 1)' },
  { id: 10103, color: 'rgba(253, 148, 152, 1)' },
  { id: 10104, color: 'rgba(197, 186, 255, 1)' },
  { id: 10105, color: 'rgba(110, 120, 232, 1)' },
  { id: 10106, color: 'rgba(74, 86, 226, 1)' },
  { id: 10107, color: 'rgba(129, 225, 255, 1)' },
  { id: 10108, color: 'rgba(36, 204, 167, 1)' },
  { id: 10109, color: 'rgba(0, 173, 132, 1)' },
  { id: 10110, color: 'rgba(255, 101, 150, 1)' }
]

const DiagramTab = () => {
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [stats, setStats] = useState({})
  const [getData, { isLoading, isError }] = useLazyGetStatsByPeriodQuery()

  const handleChange = (name, value) => {
    switch (name) {
      case 'month':
        return setMonth(value)
      case 'year':
        return setYear(value)
      default:
        return
    }
  }

  useEffect(() => {
    const query = makeQuery(year, month)
    if (!query) {
      return
    }
    const fetchData = async () => {
      const result = await getData(query).unwrap()
      if (isError) {
        Notify.failure('Something went wrong...')
        return
      }
      const changedResult = addColorsToObject(colors, result)
      setStats(changedResult)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year])

  const addColorsToObject = (colors, stats) => {
    const newObject = { ...stats }
    newObject.stats = stats.stats.map(stat => {
      const color = colors.find(color => color.id === stat.id)
      return { ...stat, color: color.color }
    })
    return newObject
  }

  const makeQuery = (year, month) => {
    const currentMonth = new Date().getMonth() + 1
    const currentYear = new Date().getFullYear()
    if (month === 0 && !year) {
      return `year=${currentYear}`
    }
    if (!year && !month) {
      return `year=${currentYear}&month=${currentMonth}`
    }
    if (year && !month) {
      return `year=${year}`
    }
    if (year && month) {
      return `year=${year}&month=${month}`
    }
    if (!year && month) {
      return `year=${currentYear}&month=${month}`
    }
  }

  return (
    <Container>
      <StatsTitle>Statistics</StatsTitle>
      {isLoading ? (
        <LoaderWrapper />
      ) : (
        <StatsWrapper>
          <DiagramWrapper>
            <Chart
              statistics={stats.stats ?? []}
              totalData={stats.totalStats ?? []}
            />
          </DiagramWrapper>
          <StatsTable
            statistics={stats.stats ?? []}
            totalData={stats.totalStats ?? []}
            onChange={handleChange}
          />
        </StatsWrapper>
      )}
    </Container>
  )
}
export default DiagramTab
