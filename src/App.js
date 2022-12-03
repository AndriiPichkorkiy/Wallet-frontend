import React from 'react';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import UserRoutes from './components/routes/UserRoutes/UserRoutes'
import { Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'

import NavBarTemp from './components/temp/NavBarTemp'
import DashbordBtns from './components/DashbordBtns/DashbordBtns'
import DiagramTab from './components/DiagramTab/DiagramTab'

// console.log(process.env)
const testPicture = require('./assets/images/authImg/login-desk.png')

function App() {
  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(currentUser())
  // }, [dispatch])
  return (

    <>
      <NavBarTemp />
      <Routes>
        <Route path='/home' element={<DashboardPage />} />
        <Route path='/statistics' element={<DiagramTab />} />
        <Route path='/register' element={<RegistrationPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route
          path='*'
          element={
            <div>
              <DashbordBtns />
              <p>Not found 404</p>
            </div>
          }
        />
      </Routes>

      <div>
        <UserRoutes />
      </div>

      <div className='App'>
        <img src={testPicture} alt='selling img' />
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