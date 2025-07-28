import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import './App.css'
import HeroLayout from './Components/Herolayout'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path="" element={<HeroLayout />}>
          
        </Route>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
