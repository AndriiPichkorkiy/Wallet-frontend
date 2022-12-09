import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Currency from '../../components/Currency'
import Balance from '../../components/Balance/Balance'
import DashbordBtns from '../../components/DashbordBtns/DashbordBtns'
import Header from '../../components/Header/Header'
import Loader from '../../components/Loader/Loader'
import {
  BG,
  ContainerLeft,
  ContainerTop,
  MainContainer
} from './Dashboard.styled'
import Media from 'react-media'
import mediumPinkImg from '../../assets/images/ellipsesBg/EllipsePinkTablet.png'
import violetImg from '../../assets/images/ellipsesBg/EllipseViolet.png'
import largePinkImg from '../../assets/images/ellipsesBg/EllipsePink.png'

const DashboardPage = () => {
  return (
    <>
      <Header />
      <BG
        mediumPinkImg={mediumPinkImg}
        violetImg={violetImg}
        largePinkImg={largePinkImg}
      >
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
                        <Currency />
                      </ContainerTop>
                    </>
                  )}
                  {matches.large && (
                    <>
                      <ContainerLeft>
                        ddddd
                        <DashbordBtns />
                        <Balance />
                        <Currency />
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
      </BG>
    </>
  )
}

export default DashboardPage
