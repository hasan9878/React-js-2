import React,{useState} from 'react';
import Herolayout from './Herolayout';
import Incidehero from './Incidehero';

import { useNavigate } from 'react-router-dom';

import { FaMountain, FaBiohazard, FaSnowflake, FaTemperatureLow, FaCloudSunRain, FaGlobeAmericas , FaWater, FaSun, FaCloudShowersHeavy, FaBolt, FaHandPaper, FaWind, FaFire } from 'react-icons/fa'; 


function HeroIncide() {

    const navigate = useNavigate(); 
   const [selectedIncident, setSelectedIncident] = useState(null);
   const incidents = [
        { id: 'avalanche', name: 'Avalanche', icon: FaMountain },
        { id: 'biological', name: 'Biological', icon: FaBiohazard },
        { id: 'blizzard', name: 'Blizzard', icon: FaSnowflake },
        { id: 'cold_freezing', name: 'Cold/Freezing', icon: FaTemperatureLow },
        { id: 'drought', name: 'Drought', icon: FaCloudSunRain },
        { id: 'earthquake', name: 'Earthquake', icon: FaGlobeAmericas  },
        { id: 'flooding', name: 'Flooding', icon: FaWater },
        { id: 'heat_wave', name: 'Heat Wave', icon: FaSun },
        { id: 'hail', name: 'Hail', icon: FaCloudShowersHeavy },
        { id: 'lightning', name: 'Lightning', icon: FaBolt },
        { id: 'man_made', name: 'Man Made', icon: FaHandPaper }, 
        { id: 'mudslide', name: 'Mudslide', icon: FaMountain }, 
        { id: 'severe_storm', name: 'Severe Storm', icon: FaWind },
        { id: 'strong_wind', name: 'Strong Wind', icon: FaWind }, 
        
        
        { id: 'wildfire', name: 'Wildfire', icon: FaFire },
    ];
    const handleIncidentClick = (id) => {
        setSelectedIncident(id);
    };
 
  return (
    <>
<Herolayout/>  

<Incidehero nextPath="/IncidentsStep4"/>

 
        <div className="flex-grow p-4 sm:p-6 md:p-8 bg-white ">
          

           

          <div className=" bg-white flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8 mt-10">
          
            <div className="text-center mb-10 w-full max-w-4xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-navactive mb-4">
                    Which of these best describes the incident?
                </h2>
            </div>

            {/* Incidents Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 max-w-7xl mx-auto">
                {incidents.map((incident) => (
                    <button
                        key={incident.id}
                        className={`
                            flex flex-row gap-5 items-center justify-center p-4 sm:p-5 rounded-lg shadow-sm
                            border-2 transition-all duration-200 ease-in-out
                            ${
                                selectedIncident === incident.id
                                    ? 'bg-nav text-white border-nav shadow-md'
                                    : 'bg-ticket text-gray-700 border-gray-200 hover:bg-button hover:shadow-md'
                            }
                        `}
                        onClick={() => handleIncidentClick(incident.id)}
                    >
                        {incident.icon && (
                            <incident.icon
                                className={`
                                    w-8 h-8 sm:w-9 sm:h-9 mb-2
                                    ${selectedIncident === incident.id ? 'text-white' : 'text-nav'}
                                `}
                            />
                        )}
                        <span
                            className={`
                                text-sm sm:text-base font-medium text-center
                                ${selectedIncident === incident.id ? 'text-white' : 'text-gray-700'}
                            `}
                        >
                            {incident.name}
                        </span>
                    </button>
                ))}
            </div>
        </div>





        </div>
    
       

       
      

    </>
  );
}

export default HeroIncide;
