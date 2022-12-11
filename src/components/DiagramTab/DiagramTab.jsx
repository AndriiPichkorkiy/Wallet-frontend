import React, { useState } from 'react'
import Chart from '../Chart/Chart'

import {
  useGetStatsQuery,
  useGetTotalStatsQuery
  // useGetStatsByPeriodQuery
} from '../../services/statsApi'
import StatsTable from '../StatsTable/StatsTable'

import {
  StatsTitle,
  StatsWrapper,
  DiagramWrapper,
  Container
} from './DiagramTab.styled'

const DiagramTab = () => {
  const currentMonth = new Date().getMonth() + 1
  const currentYear = new Date().getFullYear()

  const [month, setMonth] = useState(currentMonth)
  const [year, setYear] = useState(currentYear)
  console.log(month, year)
  // const [query, setQuery] = useState(`year=${year}&month=${month}`)

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

  // useEffect(() => {
  //   setQuery(`year=${year}&month=${month}`)
  // }, [month, year])

  // const { data: statsByPeriod } = useGetStatsByPeriodQuery(query)
  const { data: statsData } = useGetStatsQuery()
  const { data: totalData } = useGetTotalStatsQuery()

  // console.log(statsByPeriod)

  return (
    <Container>
      <StatsTitle>Statistics</StatsTitle>
      <StatsWrapper>
        <DiagramWrapper>
          {statsData || totalData !== false ? (
            <Chart statistics={statsData ?? []} totalData={totalData ?? []} />
          ) : (
            <p>loading...</p>
          )}
        </DiagramWrapper>
        {statsData || totalData !== false ? (
          <StatsTable
            statistics={statsData ?? []}
            totalData={totalData ?? []}
            onChange={handleChange}
          />
        ) : (
          <p>loading...</p>
        )}
      </StatsWrapper>
    </Container>
  )
}
export default DiagramTab
