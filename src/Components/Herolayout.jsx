import React, { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="w-full overflow-x-hidden">
        <div className='flex flex-wrap justify-between items-center bg-bg text-nav py-4 px-4 md:px-12'>
          <img src="/Logo.png" alt="Logo" className="h-8" />

          {/* Hamburger Icon for mobile */}
          <button
            className="md:hidden block"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Menu for desktop */}
          <ul className='hidden md:flex gap-7 flex-wrap'>
            <li><NavLink to="/">Dashboard</NavLink></li>
            <li><NavLink to="/Incidents">Incidents</NavLink></li>
            <li><NavLink to="/Location">Locations</NavLink></li>
            <li><NavLink to="/Activities">Activities</NavLink></li>
            <li><NavLink to="/Documents">Documents</NavLink></li>
            <li><NavLink to="/ChyperAi">Chyper Ai</NavLink></li>
          </ul>

          {/* Profile section */}
          <div className='hidden md:flex justify-center gap-5 items-center flex-wrap'>
            <img src="/bell.png" alt="" className="h-6" />
            <img src="/Profile.png" alt="Profile" className="h-8" />
            <div>
              <h2 className='text-xl font-bold'>Usman Zafar</h2>
              <p className='font-semibold'>usmanzafar@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-bg px-4 py-2 overflow-y-auto max-h-screen">
            <ul className='flex flex-col gap-4'>
              <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Dashboard</NavLink></li>
              <li><NavLink to="/Incidents" onClick={() => setMenuOpen(false)}>Incidents</NavLink></li>
              <li><NavLink to="/Location" onClick={() => setMenuOpen(false)}>Locations</NavLink></li>
              <li><NavLink to="/Activities" onClick={() => setMenuOpen(false)}>Activities</NavLink></li>
              <li><NavLink to="/Documents" onClick={() => setMenuOpen(false)}>Documents</NavLink></li>
              <li><NavLink to="/ChyperAi" onClick={() => setMenuOpen(false)}>Chyper Ai</NavLink></li>
            </ul>
            <div className='flex gap-3 items-center mt-4'>
              <img src="/bell.png" alt="" className="h-6" />
              <img src="/Profile.png" alt="Profile" className="h-8" />
              <div>
                <h2 className='text-base font-bold'>Usman Zafar</h2>
                <p className='font-semibold text-xs'>usmanzafar@gmail.com</p>
              </div>
            </div>
          </div>
        )}

        

        <Outlet />
      </nav>
    </>
  )
}

export default Navbar;