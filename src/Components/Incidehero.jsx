import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

function Incidehero({nextPath}) {
  const navigate = useNavigate(); // ✅ navigate function declare here

  return (
    <>
      <hr className='w-full text-hr' />
      <div className=" bg-bg flex flex-col">
        {/* Top Navigation / Header Section */}
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between p-2 sm:p-6 bg-bg shadow-sm border-b border-gray-200">
          {/* Left Section: Close Icon, Breadcrumbs, and Title */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-3 mb-5 md:mb-0 lg:mb-0">
              <button
                onClick={() => navigate('/incidents')}
                className="text-nav hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-3 transition-colors duration-200"
              >
                <AiOutlineClose className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
              <div>
                <div className="text-lg md:text-sm text-nav">Home - Incidents - New Incident</div>
                <h1 className="text-3xl sm:text-2xl font-bold text-navactive mt-2">New Incident</h1>
              </div>
            </div>
          </div>

          {/* Center Section: Progress Bar */}
          <div className="flex-grow mx-4 sm:mx-8 max-w-xs md:max-w-md lg:max-w-xl">
            <div className="w-full bg-white rounded-full h-2">
              <div className="bg-button h-2 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>

          {/* Right Section: Back and Next Step Buttons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="px-10 py-3 sm:px-6 sm:py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-200"
            >
              Back
            </button>
            <button
              onClick={() => navigate(nextPath)}
              className="px-10 py-3 sm:px-6 sm:py-2.5 bg-orange-500 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75 transition-colors duration-200"
            >
              Next step
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Incidehero;
