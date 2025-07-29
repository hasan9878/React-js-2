import React from 'react'
import Herolayout from './Herolayout';
import Incidehero from './Incidehero';
import { FiSearch } from 'react-icons/fi';


function IncidentsStep5() {
  return (
    <>
    <Herolayout />
   <Incidehero nextPath="/IncidentsStep2" />

   
<div className='flex flex-col items-center justify-center mt-20 mb-30 '>


   <div className=' flex flex-col justify-start p-10'>

 <div className=' flex flex-col justify-start items-start gap-2 mb-8'>
<h1 className='text-4xl font-semibold text-navactive mb-5'>Where’s the incident?</h1>
<p className='text-nav '>Enter a GPS, address. or pin point on the map. Try to be as accurate as<br/> possible, or click:Jurisdiction Wide</p>
    </div>
    <div className=''>
<img src="/map.png" alt="image" />
    </div>

   </div>


</div>

    </>
  )
}

export default IncidentsStep5;