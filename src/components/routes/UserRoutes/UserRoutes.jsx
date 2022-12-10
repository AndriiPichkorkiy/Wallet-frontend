import Loader from '../../Loader/Loader'
import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../../pages/HomePage'
import { Navigate } from 'react-router-dom/dist'
import NewsPage from '../../../pages/NewsPage'

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute ";
import VerifyPage from '../../../pages/VerifyPage/VerifyPage'

const DashboardPage = lazy(() => import('../../../pages/DashboardPage'))
const RegistrationPage = lazy(() =>
  import('../../../pages/RegistrationPage/RegistrationPage')
)
const LoginPage = lazy(() => import('../../../pages/LoginPage/LoginPage'))
// const NotFoundPage = lazy(() =>
//   import('../../../pages/NotFoundPage/NotFoundPage')
// )

const DiagramTab = lazy(() => import('../../DiagramTab'))
const Currency = lazy(() => import('../../Currency'))

const UserRouters = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path='/register' element={<RegistrationPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/api/user/verify/:verifyCode' element={<VerifyPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path='/' element={<DashboardPage />}>
              <Route index element={<HomePage />} />
              <Route path='statistics' element={<DiagramTab />} />
              <Route path='currency' element={<Currency />} />
              <Route path='news' element={<NewsPage />} />
            </Route>
          </Route>
          {/* <Route path='*' element={<NotFoundPage />} /> */}
          <Route path='*' element={<Navigate to="/register" />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default UserRouters
