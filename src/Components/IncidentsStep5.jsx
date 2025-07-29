import React from 'react'
import Herolayout from './Herolayout';
import Incidehero from './Incidehero';
import { FiSearch } from 'react-icons/fi';


function IncidentsStep5() {
  return (
    <>
    <Herolayout />
   <Incidehero nextPath="/IncidentsStep2" />

    </>
  )
}

export default IncidentsStep5;