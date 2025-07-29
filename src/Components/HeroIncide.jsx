import React,{useState} from 'react';
import Herolayout from './Herolayout';
import Incidehero from './Incidehero';

import { useNavigate } from 'react-router-dom';

import { FaMountain, FaBiohazard, FaSnowflake, FaTemperatureLow, FaCloudSunRain, FaGlobeAmericas , FaWater, FaSun, FaCloudShowersHeavy, FaBolt, FaHandPaper, FaWind, FaFire } from 'react-icons/fa'; 

function HeroIncide() {
 
  return (
    <>
<Herolayout/>  

<Incidehero nextPath="/IncidentsStep4"/>
       

       
      

    </>
  );
}

export default HeroIncide;
