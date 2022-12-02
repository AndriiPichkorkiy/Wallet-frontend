// require('dotenv').config()
// console.log(process.env)
import React from 'react';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
// const testPicture = require('./assets/images/authImg/login-desk.png')

function App() {
  return (
    <div className='App'>
      {/* <h1>Hello Freinds</h1>
      <img src={testPicture} alt='selling img' /> */}
      <RegistrationPage/>
    </div>
  )
}

export default App
