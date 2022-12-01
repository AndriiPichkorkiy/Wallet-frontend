// require('dotenv').config()
import React from "react";
import UserRouters from "./components/routers/UserRouters/UserRouters";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { currentUser } from "redux/auth/auth-operations";


// console.log(process.env)
// const testPicture = require('./assets/images/authImg/login-desk.png')

function App() {
  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(currentUser())
  // }, [dispatch])
  return (
    <div>
      <UserRouters/>
    </div>
    )
}

export default App
