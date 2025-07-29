import React from 'react'
import Hero from './Hero';
import Card from './Card';




const Data = [
  {
    image: '/card1.png',
    title: 'Whitechapel Rd.',
    location: 'Tulare County, Los Angeles, CA 23415',
    price: 1456654,
    tag: 'Blizzard',
  },
  {
    image: '/card2.png',
    title: 'Whitechapel Rd.',
    location: 'Tulare County, Los Angeles, CA 23415',
    price: 1456654,
    tag: 'Blizzard',
  },
  {
    image: '/card3.png',
    title: 'Tulare County',
    location: 'Tulare County, Los Angeles, CA 23415',
    price: 1456654,
    tag: 'Blizzard',
  },
  {
    image: '/card4.png',
    title: 'Tulare County',
    location: 'Tulare County, Los Angeles, CA 23415',
    price: 1456654,
    tag: 'Blizzard',
  },
  {
    image: '/card5.png',
    title: 'Tulare County',
    location: 'Tulare County, Los Angeles, CA 23415',
    price: 1456654,
    tag: 'Blizzard',
  },
  {
    image: '/card6.png',
    title: 'Tulare County',
    location: 'Tulare County, Los Angeles, CA 23415',
    price: 1456654,
    tag: 'Blizzard',
  },
];


function Incidents() {

    
  return (
   <>
   <Hero title="Home-Incidents" subtitle="Incidents" buttontext="+ New Incidents" buttonLink="/Incidents/IncidentsStep2"/>



       <div className="p-20 min-h-screen mb-56">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>

   </>
  )
}

export default Incidents;