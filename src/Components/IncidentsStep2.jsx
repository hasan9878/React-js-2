import React from 'react'
import Herolayout from './Herolayout'
import { FaRadiation, FaInfoCircle, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function IncidentsStep2() {
  return (
    <>
      <Herolayout  />

      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-6 md:p-8">
        {/* Header Section */}
        <div className="text-center p-6 mb-8 w-full max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-navactive">Let's get started</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit general sac mascho werhoLorem ipsum dolor sit general sac mascho werho,Lorem ipsum dolor sit gene
          </p>
        </div>

        {/* Progress Stepper Section */}
        <div className="flex justify-center items-center py-6 w-full max-w-xl mb-12">
          <div className="flex items-center w-full justify-between">
            {/* Step 1 */}
            <div className="flex flex-col items-center relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-bg flex items-center justify-center text-nav font-bold text-lg z-10">
                1
              </div>
            </div>
            <div className="flex-grow h-1 bg-bg -mx-4 sm:-mx-6"></div>
            {/* Step 2 */}
            <div className="flex flex-col items-center relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-bg flex items-center justify-center text-nav font-bold text-lg z-10">
                2
              </div>
            </div>
            <div className="flex-grow h-1 bg-bg -mx-4 sm:-mx-6"></div>
            {/* Step 3 */}
            <div className="flex flex-col items-center relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-bg flex items-center justify-center text-nav font-bold text-lg z-10">
                3
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch flex-wrap gap-6 w-full max-w-5xl px-4">
          {/* Card 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md flex-1 min-w-[280px] max-w-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="text-orange-500 mb-4 flex justify-center md:justify-start">
              <FaRadiation className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-navactive text-center md:text-left">What type of incident?</h3>
            <p className="text-nav text-sm sm:text-base text-center md:text-left">
              Choose the category that best describes the incident.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md flex-1 min-w-[280px] max-w-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="text-orange-500 mb-4 flex justify-center md:justify-start">
              <FaInfoCircle className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-navactive text-center md:text-left">Tell us about the incident?</h3>
            <p className="text-nav text-sm sm:text-base text-center md:text-left">
              Let's connect the dots and see where to start.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md flex-1 min-w-[280px] max-w-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="text-orange-500 mb-4 flex justify-center md:justify-start">
              <FaMapMarkerAlt className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-navactive text-center md:text-left">Where did the incident occur?</h3>
            <p className="text-nav text-sm sm:text-base text-center md:text-left">
              Lorem ipsum dolor sit general sac mascho werho.
            </p>
          </div>
        </div>

        {/* Get Started Button */}
        <Link
          to="/HeroIncide"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-10 rounded-lg mt-12 transition duration-300 ease-in-out text-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75 inline-block text-center"
        >
          Get started
        </Link>
      </div>
    </>
  )
}

export default IncidentsStep2