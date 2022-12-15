import React, { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Currency from '../../components/Currency'
import Balance from '../../components/Balance/Balance'
import DashbordBtns from '../../components/DashbordBtns/DashbordBtns'
import Header from '../../components/Header'
import { LoaderWrapper } from '../../components/Loader/Loader'

import {
  ContainerLeft,
  ContainerTop,
  MainContainer,
  Wrapper
} from './Dashboard.styled'

import Media from 'react-media'
import { useLocation } from 'react-router-dom'

const DashboardPage = () => {
  const { pathname } = useLocation()

  return (
    <Wrapper>
      <Header />
      <MainContainer>
        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px) and (max-width: 1199px)',
            large: '(min-width: 1200px)'
          }}
        >
          {matches => (
            <>
              {matches.small &&
                (pathname === '/currency' || pathname === '/statistics') && (
                  <ContainerLeft>
                    <DashbordBtns />
                  </ContainerLeft>
                )}
              {matches.small && pathname === '/' && (
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
              {matches.large && pathname === '/currency' && <Navigate to='/' />}
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
        <Suspense fallback={<LoaderWrapper />}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </Wrapper>
  )
}

export default DashboardPage
