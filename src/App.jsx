import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './assests/logo.png'
import Home from './Home';
import Register from './Register';
import ProfilePassword from './ProfilePassword';
import AddPassword from './AddPassword';
import Login from './Login';
import ViewPwd from './ViewPwd';
import Header from './Header';
import Footer from './Footer';

function App() {

  const handleLogout = () => {
    console.log('User logged out!');
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col font-sans">
        <header name="header" id='header' className="bg-gray-800 p-4 shadow-lg flex flex-col sm:flex-row items-center justify-center sm:justify-between px-6">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src={logo} alt="Locify Logo" className="h-12 w-12 mr-3 rounded-full object-cover" />
            <h1 className="text-3xl font-extrabold text-blue-400 tracking-wide">Lockify</h1>
            <h2 className="text-xl text-gray-300 font-medium hidden md:block"> - A Secure Password Manager</h2>
          </div>
            <nav className="flex items-center space-x-4">
            
            <Link
              to="/"
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
              to="/login"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Logout
            </Link>
          </nav>
        </header>
       {/* <Header />*/}
        <main name="container" id='container' className="flex-grow flex items-center justify-center p-6">
          
          <Link
              to="/"
              className="text-blue-300 hover:text-blue-100 font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
            </Link>
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/add-password" element={<AddPassword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/view-pwd" element={<ViewPwd />} />
            <Route path="/profile" element={<ProfilePassword />} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </main>
        {/*<Footer />*/}
        <footer name="footer" id='footer' className="bg-gray-800 p-4 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Locify. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}
 export default App 