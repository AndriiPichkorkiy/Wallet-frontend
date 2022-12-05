import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import DashbordBtns from '../../components/DashbordBtns/DashbordBtns'
import Header from '../../components/Header/Header'
import Loader from '../../components/Loader/Loader'
import { MainContainer } from './Dashboard.styled'

const DashboardPage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <DashbordBtns />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </>
  )
}

export default DashboardPage
