import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import MonoCurrency from '../../components/Currency/Currency'
import Balance from '../../components/Balance/Balance'
import DashbordBtns from '../../components/DashbordBtns/DashbordBtns'
import Header from '../../components/Header/Header'
import Loader from '../../components/Loader/Loader'
import { ContainerLeft, ContainerTop, MainContainer } from './Dashboard.styled'
import Media from 'react-media'

const DashboardPage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        {
          <Media
            queries={{
              small: '(max-width: 767px)',
              medium: '(min-width: 768px) and (max-width: 1199px)',
              large: '(min-width: 1200px)'
            }}
          >
            {matches => (
              <>
                {matches.small && (
                  <>
                    <ContainerLeft>
                      aaaaa
                      <DashbordBtns />
                      <Balance />
                    </ContainerLeft>
                  </>
                )}
                {matches.medium && (
                  <>
                    <ContainerTop>
                      <ContainerLeft>
                        fffff
                        <DashbordBtns />
                        <Balance />
                      </ContainerLeft>
                      <MonoCurrency />
                    </ContainerTop>
                  </>
                )}
                {matches.large && (
                  <>
                    <ContainerLeft>
                      ddddd
                      <DashbordBtns />
                      <Balance />
                      <MonoCurrency />
                    </ContainerLeft>
                  </>
                )}
              </>
            )}
          </Media>
        }
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </>
  )
}

export default DashboardPage
