import React from 'react'
import DiagramTab from './components/DiagramTab'

console.log(process.env)
const testPicture = require('./assets/images/authImg/login-desk.png')

function App() {
  return (
    <div className='App'>
      <h1>Hello React</h1>
      <img src={testPicture} alt='selling img' />
      <DiagramTab />
    </div>
  )
}

export default App
