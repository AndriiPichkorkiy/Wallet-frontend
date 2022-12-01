import React, { useState } from 'react'

import PrivateHeader from './components/PrivateHeader/PrivateHeader'
console.log(process.env)
const testPicture = require('./assets/images/authImg/login-desk.png')

function App() {

  return (
    <div className='App'>
      <PrivateHeader/>

      <img src={testPicture} alt='selling img' />
    </div>
  )
}

export default App
