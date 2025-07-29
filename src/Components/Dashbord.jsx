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
     <Hero title="Welcome back" subtitle="Dashboard" buttontext="chyper Ai" buttonLink="ChyperAi"/>
      

       <div className="p-20 min-h-screen mb-56">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>

    

{/* Chat button */}
        <button
          className="fixed right-8 bottom-8 bg-orange-500 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-orange-600 transition"
          onClick={() => setShowChat(true)}
        >
          <span>Chat</span>
          <i className="fas fa-comment"></i>
        </button>
      

      {/* Chat box */}
      {showChat && (
        <div className="fixed right-8 bottom-24 w-80 bg-white rounded-lg shadow-xl p-4 z-50 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-lg">Support Chat</span>
            <button onClick={() => setShowChat(false)}>
              <i className="fas fa-times text-gray-500"></i>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto mb-2">
            {/* Chat messages */}
            <div className="text-gray-500 text-sm mb-2">Hi! How can we help you?</div>
            {/* ...more messages */}
          </div>
          <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-orange-500">
              <i className="fas fa-paperclip"></i>
            </button>
            <button className="text-gray-400 hover:text-orange-500">
              <i className="fas fa-image"></i>
            </button>
            <input
              type="text"
              className="flex-1 border rounded px-2 py-1 focus:outline-none"
              placeholder="Type your message..."
            />
            <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    
    
    </>
    
  )
}

export default Dashbord;