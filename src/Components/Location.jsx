import React from 'react';
import Hero from './Hero';
import { FileText } from 'lucide-react';



function Location() {


 const images = [
    {
      id: 1,
      src: '/tower.png',
      h1: 'Whitechapel Rd.',
      text: 'Tulare County,  Los Angles, CA 23415',
      amount: '$1,045,654.00',
    },
    {
      id: 2,
      src: '/tower.png',
      h1: 'Whitechapel Rd.',
      text: 'Tulare County,  Los Angles, CA 23415',
      amount: '$1,045,654.00',
    },
    {
      id: 3,
      src: '/tower.png',
      h1: 'Whitechapel Rd.',
      text: 'Tulare County,  Los Angles, CA 23415',
      amount: '$1,045,654.00',
    },
    {
      id: 4,
      src: '/tower.png',
      h1: 'Whitechapel Rd.',
      text: 'Tulare County,  Los Angles, CA 23415',
      amount: '$1,045,654.00',
    },
  ];

  const journals = [
    {
      img: '/tower.png',
      h1: 'Activity name',
      text: 'Location name . 16.12212, -122.1424',
      amount: '$1,045,654.00',
    },
    {
      img: '/tower.png',
      h1: 'Activity name',
      text: 'Location name . 16.12212, -122.1424',
      amount: '$1,045,654.00',
    },
  ];

  const documents = [
    {
      img: '/tower.png',
      h1: 'Document name',
      text: 'Location name . 16.12212, -122.1424',
      amount: '$1,045,654.00',
    },
    {
      img: '/tower.png',
      h1: 'Document name',
      text: 'Location name . 16.12212, -122.1424',
      amount: '$1,045,654.00',
    },
  ];
  
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

       <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-10 bg-gray-50">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          {/* Header */}
          <div className='mb-10'>
            <p className='text-nav'> Location</p>
            <h2 className="text-4xl font-bold text-navactive mt-2 mb-10">
              Tulare County, Los Angeles, CA 32415
            </h2>
            <p className="text-sm text-nav mt-5">Approx. Cost:</p>
            <p className="text-4xl font-bold text-navactive mt-2">$60,007,450.00</p>
          </div>
          <hr className='w-full bg-nav h-0.1'/>

          {/* Description */}
          <div className='mb-20'>
            <h3 className="text-sm font-medium text-gray-700">Description</h3>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              dolorem, maiores saepe praesentium aperiam voluptas. Voluptatibus
              asperiores distinctio fugiat? Rem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti amet, alias quo cupiditate libero repudiandae voluptatum nisi aliquam nemo perspiciatis porro? Dolore veniam repellendus obcaecati voluptas deserunt impedit sunt odio eius! Adipisci voluptatum sapiente laborum vel, eveniet accusamus maiores animi neque a, deserunt libero distinctio explicabo minima alias molestiae asperiores.
            </p>
          </div>
          <hr className='w-full bg-nav h-0.1 mb-10'/>

          {/* Image Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg hover:shadow-md overflow-hidden"
              >
                <img
                  src={item.src}
                  alt={item.h1}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 space-y-1">
                  <h4 className="text-md font-semibold text-gray-800">
                    {item.h1}
                  </h4>
                  <p className="text-sm text-gray-500">{item.text}</p>
                  <p className="text-md font-bold text-green-700">
                    {item.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Journals */}
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-md font-semibold">Journals</h3>
              <button className="text-blue-600 text-sm">See all</button>
            </div>
            <div className="space-y-3 mt-3">
              {journals.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white p-3 rounded shadow-sm"
                >
                  <img
                    src={item.img}
                    alt={item.h1}
                    className="w-14 h-14 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="text-md font-semibold text-gray-800">{item.h1}</h4>
                    <p className="text-sm text-gray-500">{item.text}</p>
                  </div>
                  <span className="font-medium">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-md font-semibold">Documents</h3>
              <button className="text-blue-600 text-sm">See all</button>
            </div>
            <div className="space-y-3 mt-3">
              {documents.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white p-3 rounded shadow-sm"
                >
                  <img
                    src={item.img}
                    alt={item.h1}
                    className="w-14 h-14 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="text-md font-semibold text-gray-800">{item.h1}</h4>
                    <p className="text-sm text-gray-500">{item.text}</p>
                  </div>
                  <span className="font-medium">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Map */}
        <div className="w-full lg:w-[40%]">
          <img
            src="/incidentmap.png"
            alt="Map"
            className="rounded-md shadow-md w-full h-auto object-cover"
          />
        </div>
      </div>

    </>
  );
}

export default Location;
