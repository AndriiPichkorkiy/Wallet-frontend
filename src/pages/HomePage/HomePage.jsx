import React, { useEffect, useState } from 'react'
import Media from 'react-media'
// import { getTransactionAll } from '../../api/auth'
import HomeTabl from '../../components/HomeDashboardTable/HomeTabl'
import MobileTabl from '../../components/HomeDashboardTable/MobileTabl'
// import data from './transactions.json'
import { useGetAllTransactionsQuery } from '../../services/transactionsApi'

export default function HomePage() {
  //   const [data, setData] = useState([])

  //   useEffect(() => {
  //     getTransactionAll().then(setData)
  //   }, [])
  const { data } = useGetAllTransactionsQuery()
  console.log(useGetAllTransactionsQuery())
  //   console.log(data)

  return (
    <>
      {data !== false ? (
        <Media queries={{ small: '(max-width: 767px)' }}>
          {matches =>
            matches.small ? (
              <MobileTabl data={data ?? []} />
            ) : (
              <>
                <HomeTabl data={data ?? []} />
              </>
            )
          }
        </Media>
      ) : null}
    </>
  )
}
