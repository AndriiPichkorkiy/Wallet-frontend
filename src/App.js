import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<DashboardPage />} />
        <Route path='*' element={<div>Not found 404</div>} />
      </Routes>
    </>
  )
}

export default App
