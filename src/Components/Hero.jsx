import React from 'react';
import { useNavigate} from 'react-router-dom';

function Hero({ title, subtitle, buttontext, buttonLink }) {
  const navigate = useNavigate();

  return (
    <>
      <hr className='w-full text-hr' />

      {/* Hero layout section */}
      <div className="bg-bg px-4 md:px-8 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left side */}
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h1 className="text-2xl font-semibold text-gray-900">{subtitle}</h1>
        </div>

        {/* Right side */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          {/* Search Input */}
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search incident"
              className="w-full sm:w-60 px-4 py-2 pl-10 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <i className="fas fa-search absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"></i>
          </div>

          {/* Sort Button */}
          <button className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-200 transition">
            Sort By: Date modified
          </button>

          {/* Action Button with navigation */}
          <button
            onClick={() => navigate(buttonLink)}
            className="px-4 py-2 rounded bg-orange-500 text-white hover:bg-orange-600 transition"
          >
            {buttontext}
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
