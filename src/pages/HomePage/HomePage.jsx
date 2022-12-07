import React from 'react'
import Media from 'react-media'
import HomeTabl from '../../components/HomeTabl'
import MobileTabl from '../../components/MobileTabl'
import data from './transactions.json'
// import { useGetAllTransactionsQuery } from '../../services/transactionsApi'

// let data = []

// let result = []
// if (result.length > 0) {
//   return data
// }

function HomePage() {
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
