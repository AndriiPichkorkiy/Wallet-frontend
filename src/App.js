import React from 'react'
// import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
// import LoginPage from './pages/LoginPage/LoginPage'
import UserRoutes from './components/routes/UserRoutes/UserRoutes'
// import { Routes, Route } from 'react-router-dom'
// import DashboardPage from './pages/DashboardPage'

// import NavBarTemp from './components/temp/NavBarTemp'
// import DashbordBtns from './components/DashbordBtns/DashbordBtns'
// import DiagramTab from './components/DiagramTab/DiagramTab'

function App() {
  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(currentUser())
  // }, [dispatch])
  return (
    <>
      <div>
        <UserRoutes />
      </div>
    </>
  )
}

export default App

// <div className='App'>
//   {/* <h1>Hello Freinds</h1>
//   <img src={testPicture} alt='selling img' /> */}
//   <RegistrationPage />
//   <LoginPage/>
// </div>
