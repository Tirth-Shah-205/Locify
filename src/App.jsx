import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation  } from 'react-router-dom';
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

  const location = useLocation();
  const hideLayout = location.pathname === '/' || location.pathname === '/register';

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col font-sans">
      {!hideLayout && <Header />}
       {/* <Header />*/}
        <main name="container" id='container' className="flex-grow flex items-center justify-center p-6">
          
          <Link
              to="/"
              className="text-blue-300 hover:text-blue-100 font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
            </Link>
          <Routes> 
            <Route path="/Home" element={<Home />} />
            <Route path="/add-password" element={<AddPassword />} />
            <Route path="/" element={<Login />} />
            <Route path="/view-pwd/:web_id/:user_id" element={<ViewPwd />} />
            <Route path="/profile/:web_id/:user_id" element={<ProfilePassword />} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </main>
        {!hideLayout && <Footer />}
        
      </div>
    </>
  )
}
 export default App 