import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
  const isLogin = useSelector(state => state.user.isLoggedIn)
  if (isLogin) {
    return <Navigate to='/' />
  }
  return <Outlet />
}

export default PublicRoute
