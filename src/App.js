import React, { useEffect } from 'react'
// import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
// import LoginPage from './pages/LoginPage/LoginPage'
import UserRoutes from './components/routes/UserRoutes/UserRoutes'
// import { Routes, Route } from 'react-router-dom'
// import DashboardPage from './pages/DashboardPage'

// import NavBarTemp from './components/temp/NavBarTemp'
// import DashbordBtns from './components/DashbordBtns/DashbordBtns'
// import DiagramTab from './components/DiagramTab/DiagramTab'

import { useDispatch, useSelector } from 'react-redux'
import { useLazyCurrentUserQuery } from './services/authApi'
import { newCurrentUser, isAuth } from './redux/auth/authSlice'

function App() {
  const dispatch = useDispatch()
  const [currentUser] = useLazyCurrentUserQuery()
  const token = useSelector(state => state.token)

  useEffect(() => {
    if (!token) {
      return
    }
    const getUser = async () => {
      const user = await currentUser().unwrap()
      dispatch(newCurrentUser(user))
      dispatch(isAuth())
    }
    getUser()
  }, [dispatch])

  return (
    <>
      <div>
        <UserRoutes />
      </div>
    </>
  )
}

export default App
