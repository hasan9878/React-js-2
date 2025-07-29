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
import Location from './Components/Location'
import Activities from './Components/Activities'
import Documents from './Components/Documents'
import ChyperAi from './Components/ChyperAi'    




function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path="" element={<HeroLayout />}>
        <Route path="/" element={<Dashbord />} />
        <Route path="/Incidents" element={<Incidents />} />
        <Route path='Location' element={<Location/>} />
         <Route path="/Activities" element={<Activities />} />
      <Route path="/Documents" element={<Documents />} />
      <Route path="/ChyperAi" element={<ChyperAi />} />

          
        </Route>
       
       <Route path="Incidents/Incidentsstep2" element={<IncidentsStep2 />} />
        <Route path="/Incidehero" element={<Incidehero />} />
        <Route path="/HeroIncide" element={<HeroIncide />} />
        <Route path="/IncidentsStep4" element={<IncidentsStep4 />} />
        <Route path='/IncidentsStep5' element={<IncidentsStep5 />} />
        <Route path="*" element={<h1 className='flex justify-center items-center min-h-screen  text-5xl text-red-600 font-bold'>Page Not Found</h1>} />


      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
