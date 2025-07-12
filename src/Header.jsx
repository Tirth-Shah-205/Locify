import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assests/logo.png'
function Header() {
  return (
    <>
        <header name="header" id='header' className="bg-gray-800 p-4 shadow-lg flex flex-col sm:flex-row items-center justify-center sm:justify-between px-6">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src={logo} alt="Locify Logo" className="h-12 w-12 mr-3 rounded-full object-cover" />
            <h1 className="text-3xl font-extrabold text-blue-400 tracking-wide">Lockify</h1>
            <h2 className="text-xl text-gray-300 font-medium hidden md:block"> - A Secure Password Manager</h2>
          </div>
            <nav className="flex items-center space-x-4">
            
            <Link
              to="/Home"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Home
            </Link>

            <Link
              to="/add-password" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Add Password
            </Link>


            <Link
              to="/"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Logout
            </Link>
          </nav>
        </header>
    </>
  )
}

export default Header