import React, { useState } from 'react'
import Media from 'react-media'
import HomeTabl from '../../components/HomeDashboardTable/HomeTabl'
import MobileTabl from '../../components/HomeDashboardTable/MobileTabl'
import ModalTransactions from '../../components/ModalTransactions'
import { AddTransModalBtn } from '../../components/ModalTransaction/Buttons/AddTransModal'
import { useGetAllTransactionsQuery } from '../../services/transactionsApi'

export default function HomePage() {
  const [page, setPage] = useState(0)
  const { data } = useGetAllTransactionsQuery({ limit: 10, page: page + 1 })

  const [isModalAddTransactionOpen, SetIsModalAddTransactionOpen] =
    useState(false)

  return (
    <>
      <AddTransModalBtn onClick={() => SetIsModalAddTransactionOpen(true)} />
      {isModalAddTransactionOpen && (
        <ModalTransactions
          closeModal={() => SetIsModalAddTransactionOpen(false)}
        />
      )}

      {data ? (
        <Media queries={{ small: '(max-width: 767px)' }}>
          {matches =>
            matches.small ? (
              <MobileTabl transactions={data.transactions ?? []} />
            ) : (
              <>
                <HomeTabl
                  transactions={data.transactions ?? []}
                  quantity={data.quantity}
                  functionChangePage={setPage}
                />
              </>
            )
          }
        </Media>
      ) : null}
    </>
  )
}
