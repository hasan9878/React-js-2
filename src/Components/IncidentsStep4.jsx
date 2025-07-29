import React, { useState } from 'react';
import Herolayout from './Herolayout';
import Incidehero from './Incidehero';

function IncidentsStep4() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <>
      <Herolayout />
      <Incidehero nextPath="/IncidentsStep5" />

      
      <div className="min-h-screen flex justify-center items-start py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full  p-8 sm:p-12 rounded-lg ">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Title Field */}
            <div>
              <h2 className="text-2xl font-semibold text-navactive mb-2">
                Let's give the incident a title?
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Make a title that will easily identify the incidents
              </p>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-bg rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base placeholder-gray-400"
                placeholder="Add title here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            
            <div className=''>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Describe what happened during the incident?
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Share some information about the incident. The when, where, how.
              </p>
              <textarea
                className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-bg rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base placeholder-gray-400 min-h-[150px] resize-y"
                placeholder="Type here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
     
    </>
  );
}

export default IncidentsStep4;
