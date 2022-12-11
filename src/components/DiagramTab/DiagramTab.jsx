import React, { useState, useEffect } from 'react'
import Chart from '../Chart/Chart'
import { useDispatch, } from 'react-redux'
import { useLazyGetStatsByPeriodQuery } from '../../services/statsApi'

import {
  // useGetStatsQuery,
  // useGetTotalStatsQuery,
  useGetStatsByPeriodQuery
} from '../../services/statsApi'
import StatsTable from '../StatsTable/StatsTable'

import { setBalance } from '../../redux/finance/financeSlice'

import {
  StatsTitle,
  StatsWrapper,
  DiagramWrapper,
  Container
} from './DiagramTab.styled'

const DiagramTab = () => {
  const dispatch = useDispatch()

  const currentMonth = new Date().getMonth() + 1
  const currentYear = new Date().getFullYear()

  const [month, setMonth] = useState(currentMonth)
  const [year, setYear] = useState(currentYear)
  // const [query, setQuery] = useState(`year=${year}`)
  const [query, setQuery] = useState(`year=${year}&month=${month}`)

  const handleChange = ({ target: { name, value } }) => {
    console.log(value)
    switch (name) {
      case 'month':
        return setMonth(value)
      case 'year':
        return setYear(value)
      default:
        return
    }
  }

  const [getBalance] = useLazyGetStatsByPeriodQuery()
  // const balance = useSelector(state => state.finance)

  useEffect(() => {
    // setQuery(`year=${year}`)
    setQuery(`year=${year}&month=${month}`)
    const fetchBalance = async () => {
      const data = await getBalance(query).unwrap()
      dispatch(setBalance(data.totalStats.totalBalance))
    }
    fetchBalance()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year])

  const { data: statsByPeriod } = useGetStatsByPeriodQuery(query)
  const statsData = statsByPeriod?.stats
  const totalData = statsByPeriod?.totalStats
  // const { data: statsData } = useGetStatsQuery()
  // const { data: totalData } = useGetTotalStatsQuery()

  // const categories = statsData?.filter(
  //   item => item.id !== '10501' && item.id !== '10502'
  // )

  console.log(statsByPeriod)

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
