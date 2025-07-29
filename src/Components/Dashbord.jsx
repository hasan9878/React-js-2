import React, { useState } from 'react'
import Hero from './Hero'
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

function Dashbord() {
  const [showChat, setShowChat] = useState(false); // এখানে add করুন

  return (
    <>  
     <Hero title="Welcome back" subtitle="Dashboard" buttontext="chyper Ai"/>
      

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

export default Dashbord;