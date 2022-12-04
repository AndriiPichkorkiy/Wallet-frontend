// require('dotenv').config()
import React from 'react'
import UserRoutes from './components/routes/UserRoutes/UserRoutes'
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { currentUser } from "redux/auth/auth-operations";
import Currency from "./components/Currency/Currency"

console.log(process.env)
const testPicture = require('./assets/images/authImg/login-desk.png')

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

      <div className='App'>
        <img src={testPicture} alt='selling img' />
      </div>
    </>
  )
}

export default App