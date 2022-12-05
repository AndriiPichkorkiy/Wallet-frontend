import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import AsideBar from '../../components/AsideBar'
import Header from '../../components/Header/Header'
import Loader from '../../components/Loader/Loader'
import { MainContainer } from './Dashboard.styled'

const DashboardPage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <AsideBar />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </>
  )
}

export default DashboardPage
