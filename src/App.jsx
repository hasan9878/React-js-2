import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import './App.css'
import HeroLayout from './Components/Herolayout'
import Hero from './Components/Hero'
import Dashbord from './Components/Dashbord'  
import Incidents from './Components/Incidents'
import Incidehero from './Components/Incidehero'
import IncidentsStep2 from './Components/IncidentsStep2'



function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path="" element={<HeroLayout />}>
        <Route path="/" element={<Dashbord />} />
        <Route path="/Incidents" element={<Incidents />} />

          
        </Route>
       
       <Route path="Incidents/Incidentsstep2" element={<IncidentsStep2 />} />
        <Route path="/Incidehero" element={<Incidehero />} />

      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
