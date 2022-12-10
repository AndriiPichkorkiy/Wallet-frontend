import React, { Suspense, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Currency from '../../components/Currency'
import Balance from '../../components/Balance/Balance'
import DashbordBtns from '../../components/DashbordBtns/DashbordBtns'
import Header from '../../components/Header/Header'
import Loader from '../../components/Loader/Loader'
import {
  // BG,
  ContainerLeft,
  ContainerTop,
  MainContainer
} from './Dashboard.styled'
import Media from 'react-media'
// import mediumPinkImg from '../../assets/images/ellipsesBg/EllipsePinkTablet.png'
// import violetImg from '../../assets/images/ellipsesBg/EllipseViolet.png'
// import largePinkImg from '../../assets/images/ellipsesBg/EllipsePink.png'
import { useLocation } from 'react-router-dom'

import ModalTransactions from "../../components/ModalTransaction/ModalTransactions"
import { AddTransModalBtn } from '../../components/ModalTransaction/Buttons/AddTransModal'



const DashboardPage = () => {
  const { pathname } = useLocation()
  const [isModalAddTransactionOpen, SetIsModalAddTransactionOpen] = useState(false)
  return (
    <>
      <Header />
      {/* <BG
        mediumPinkImg={mediumPinkImg}
        violetImg={violetImg}
        largePinkImg={largePinkImg}
      > */}
      <MainContainer>
        <AddTransModalBtn onClick={() => SetIsModalAddTransactionOpen(true)} />
        {isModalAddTransactionOpen && <ModalTransactions closeModal={() => SetIsModalAddTransactionOpen(false)} />}
        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px) and (max-width: 1199px)',
            large: '(min-width: 1200px)'
          }}
        >
          {matches => (
            <>
              {matches.small && pathname === '/currency' && (
                <ContainerLeft>
                  <DashbordBtns />
                </ContainerLeft>
              )}
              {matches.small &&
                (pathname === '/' ||
                  pathname === '/statistics') && (
                  <>
                    <ContainerLeft>
                      <DashbordBtns />
                      <Balance />
                    </ContainerLeft>
                  </>
                )}
              {matches.medium && pathname === '/currency' && (
                <Navigate to='/' />
              )}
              {matches.medium && (
                <>
                  <ContainerTop>
                    <ContainerLeft>
                      <DashbordBtns />
                      <Balance />
                    </ContainerLeft>
                    <Currency />
                  </ContainerTop>
                </>
              )}
              {matches.large && pathname === '/currency' && (
                <Navigate to='/' />
              )}
              {matches.large && (
                <>
                  <ContainerLeft>
                    <DashbordBtns />
                    <Balance />
                    <Currency />
                  </ContainerLeft>
                </>
              )}
            </>
          )}
        </Media>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContainer>
      {/* </BG> */}
    </>
  )
}

export default DashboardPage
