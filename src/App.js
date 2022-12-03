// require('dotenv').config()
import React from 'react'
import UserRoutes from './components/routes/UserRoutes/UserRoutes'
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { currentUser } from "redux/auth/auth-operations";

import { Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'

import DiagramTab from './components/DiagramTab'
import NavBarTemp from './components/temp/NavBarTemp'
import DashbordBtns from './components/DashbordBtns/DashbordBtns'

console.log(process.env)
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
        <Route path='/statistic' element={<DiagramTab />} />
        <Route path='*' element={<div><DashbordBtns/><p>Not found 404</p></div>} />
      </Routes>

      <div>
        <UserRoutes />
      </div>

      <div className='App'>
        <img src={testPicture} alt='selling img' />
        <DiagramTab />
      </div>
    </>
  )
}

export default App
