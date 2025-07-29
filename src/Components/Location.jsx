import React from 'react';
import Hero from './Hero';


function Location() {
  
  return (
    <>
      <Hero
        title="Home - Location"
        subtitle={
          <span className="flex items-center space-x-2 gap-5">
            <img src="/location.png" alt="Storm Icon" className="w-7 h-7" />
            <span className="text-navactive font-bold text-2xl">
              DR-4699 March 2023 Severe Storms
            </span>
          </span>
        }
        buttontext="+ New Location"
        buttonLink="/wewew"
      />

    </>
  );
}

export default Location;
