import React, { useState } from 'react'
import Media from 'react-media'
// import { getTransactionAll } from '../../api/auth'
import HomeTabl from '../../components/HomeDashboardTable/HomeTabl'
import MobileTabl from '../../components/HomeDashboardTable/MobileTabl'
import ModalTransactions from '../../components/ModalTransaction/ModalTransactions'
import { AddTransModalBtn } from '../../components/ModalTransaction/Buttons/AddTransModal'
import { useGetAllTransactionsQuery } from '../../services/transactionsApi'

export default function HomePage() {
  const { data } = useGetAllTransactionsQuery()

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
