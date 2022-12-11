import React, { useEffect, useState } from 'react'
import Media from 'react-media'
import { getTransactionAll } from '../../api/auth'
import HomeTabl from '../../components/HomeTabl'
import MobileTabl from '../../components/MobileTabl'
// import data from './transactions.json'
// import { useGetAllTransactionsQuery } from '../../services/transactionsApi'

function HomePage() {
  const [data, setData] = useState([])

  useEffect(() => {
    getTransactionAll().then(setData)
  }, [])
  //   const { data } = useGetAllTransactionsQuery()
  //   console.log(useGetAllTransactionsQuery())
  //   console.log(data)

  return (
    <>
      {data ? (
        <Media queries={{ small: '(max-width: 767px)' }}>
          {matches =>
            matches.small ? (
              <MobileTabl data={data} />
            ) : (
              <>
                <HomeTabl data={data} />
              </>
            )
          }
        </Media>
      ) : null}
    </>
  )
}

export default HomePage
