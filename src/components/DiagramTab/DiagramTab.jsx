import React, { useState, useEffect } from 'react'
import Chart from '../Chart/Chart'

import { StatsTitle } from './DiagramTab.styled'

import {
  useGetStatsQuery,
  useGetTotalStatsQuery,
  useGetStatsByPeriodQuery
} from '../../services/statsApi'
import StatsTable from '../StatsTable/StatsTable'

const DiagramTab = () => {
  const currentMonth = new Date().getMonth() + 1
  const currentYear = new Date().getFullYear()
  const [month, setMonth] = useState(currentMonth)
  const [year, setYear] = useState(currentYear)
  const [query, setQuery] = useState(`year=${year}&month=${month}`)

  const handleChange = ({ target: { name, value } }) => {
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
    setQuery(`year=${year}&month=${month}`)
  }, [month, year])

  // const { data: statsByPeriod } = useGetStatsByPeriodQuery(query)
  const { data: statsData } = useGetStatsQuery()
  const { data: totalData } = useGetTotalStatsQuery()

  // console.log(statsByPeriod)

  return (
    <>
      <StatsTitle>Statistics</StatsTitle>

      {statsData || totalData !== false ? (
        <Chart statistics={statsData ?? []} totalData={totalData ?? []} />
      ) : (
        <p>loading...</p>
      )}
      {/* {statsData || totalData !== false ? (
        <StatsTable statistics={statsData ?? []} totalData={totalData ?? []} />
      ) : (
        <p>loading...</p>
      )} */}
      <StatsTable
        onChange={handleChange}
        statistics={statsData ?? []}
        totalData={totalData ?? []}
      />
    </>
  )
}
export default DiagramTab
