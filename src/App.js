import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'

import PrivateHeader from './components/PrivateHeader/PrivateHeader'
import Chart from './components/Chart/Chart'

console.log(process.env)
const testPicture = require('./assets/images/authImg/login-desk.png')

//Temp data
const totalBalance = 20000

const statistics = [
  { name: 'Basic expenses', color: 'rgba(254, 208, 87, 1)', quantity: 8700 },
  { name: 'Products', color: 'rgba(255, 216, 208, 1)', quantity: 3800 },
  { name: 'Car', color: 'rgba(253, 148, 152, 1)', quantity: 1500 },
  { name: 'Self care', color: 'rgba(197, 186, 255, 1)', quantity: 800 },
  { name: 'Child care', color: 'rgba(110, 120, 232, 1)', quantity: 2208 },
  { name: 'Household products', color: 'rgba(74, 86, 226, 1)', quantity: 300 },
  { name: 'Education', color: 'rgba(129, 225, 255, 1)', quantity: 3400 },
  { name: 'Leisure', color: 'rgba(36, 204, 167, 1)', quantity: 1230 },
  { name: 'Other expenses', color: 'rgba(0, 173, 132, 1)', quantity: 610 },
]

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<DashboardPage />} />
        <Route path='*' element={<div>Not found 404</div>} />
      </Routes>

      <div className='App'>
        <PrivateHeader />

        <img src={testPicture} alt='selling img' />
        <Chart statistics={statistics} totalBalance={totalBalance} />
      </div>
    </>
  )
}

export default App
