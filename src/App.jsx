import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import './App.css'
import HeroLayout from './Components/Herolayout'
import Hero from './Components/Hero'
import Dashbord from './Components/Dashbord'  
import Incidents from './Components/Incidents'
import Incidehero from './Components/Incidehero'
import IncidentsStep2 from './Components/IncidentsStep2'
import HeroIncide from './Components/HeroIncide'
import IncidentsStep4 from './Components/IncidentsStep4'  
import IncidentsStep5 from './Components/IncidentsStep5'



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
        <Route path="/HeroIncide" element={<HeroIncide />} />
        <Route path="/IncidentsStep4" element={<IncidentsStep4 />} />
        <Route path='/IncidentsStep5' element={<IncidentsStep5 />} />

      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
