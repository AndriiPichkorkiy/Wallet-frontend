import React, { useState } from 'react'
import Media from 'react-media'
import HomeTabl from '../../components/HomeDashboardTable/HomeTabl'
import MobileTabl from '../../components/HomeDashboardTable/MobileTabl'
import ModalTransactions from '../../components/ModalTransactions'
import { AddTransModalBtn } from '../../components/ModalTransactions/Buttons/AddTransModal'
import { useGetAllTransactionsQuery } from '../../services/transactionsApi'
import { Button } from './HomePage.styled'

export default function HomePage() {
  const [page, setPage] = useState(0)
  const { data } = useGetAllTransactionsQuery({ limit: 5, page: page + 1 })
  const [isModalAddTransactionOpen, SetIsModalAddTransactionOpen] =
    useState(false)

  if (!data) return
  const isShowClickNext = data.quantity > data.transactions.length + page * 5

  const onClickFirstPage = () => {
    setPage(page === 1)
    window.scrollTo(0, 0)
  }

  const onClickRight = async () => {
    setPage(prevState => prevState + 1)
    window.scrollTo(0, 0)
  }

  const onClickLeft = async () => {
    setPage(prevState => prevState - 1)
    window.scrollTo(0, 0)
  }

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
              <>
                <MobileTabl transactions={data.transactions ?? []} />
                <div style={{ display: 'flex' }}>
                  {page !== 0 && (
                    <Button onClick={onClickLeft}>Click left</Button>
                  )}
                  {page !== 0 &&
                    data.transactions.length > 0 &&
                    data.transactions.length < 5 && (
                      <>
                        <Button onClick={onClickFirstPage}>
                          To First Page
                        </Button>
                      </>
                    )}
                  {isShowClickNext && (
                    <Button onClick={onClickRight}>Click right</Button>
                  )}
                </div>
              </>
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
