import React from 'react'
import FirstPage from './pages/First/First'
import SecondPage from './pages/Second/Second'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SecondTempPage from './pages/Second/SecondTemp'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/tree' element={<SecondTempPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App