import React, { useEffect } from 'react'
import UserRoutes from './components/routes/UserRoutes/UserRoutes'

import { useDispatch, useSelector } from 'react-redux'
import { useLazyCurrentUserQuery } from './services/authApi'
import { newCurrentUser, isAuth } from './redux/auth/authSlice'

import { ThemeProvider } from 'styled-components'
import { ThemeContext } from './components/ThemeSwitching/ThemeContextProvider'
import { useContext } from 'react'

function App() {
  const dispatch = useDispatch()
  const [currentUser] = useLazyCurrentUserQuery()
  const { currentTheme } = useContext(ThemeContext)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return (
    <ThemeProvider theme={currentTheme}>
      <UserRoutes />
    </ThemeProvider>
  )
}

export default App
