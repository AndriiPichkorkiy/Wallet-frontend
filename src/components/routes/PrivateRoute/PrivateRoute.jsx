import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const isLogin = useSelector(state => state.user.isLoggedIn)
  if (!isLogin) {
    return <Navigate to='/login' />
  }
  return <Outlet />
}

export default PrivateRoute
