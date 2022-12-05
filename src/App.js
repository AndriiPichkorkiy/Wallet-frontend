// require('dotenv').config()
import React from 'react'
import UserRoutes from './components/routes/UserRoutes/UserRoutes'
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { currentUser } from "redux/auth/auth-operations";
// import Currency from "./components/Currency/Currency"

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
