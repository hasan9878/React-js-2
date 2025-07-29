import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import './App.css'
import HeroLayout from './Components/Herolayout'
import Hero from './Components/Hero'
import Dashbord from './Components/Dashbord'  



function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path="" element={<HeroLayout />}>
        <Route path="/" element={<Dashbord />} />
          
        </Route>


      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
