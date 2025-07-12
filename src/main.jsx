import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Register from './Register.jsx'
import Login from './Login.jsx'
import ProfilePassword from './ProfilePassword.jsx'
import ViewPwd from './ViewPwd.jsx'
import Home from './Home.jsx'
import AddPassword from './AddPassword.jsx'
import {BrowserRouter} from 'react-router-dom';
import Header from './Header.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
   <App />
   {/*<Register />*/}
   {/*<Login />*/}
   {/*<ProfilePassword />*/}
   {/*<ViewPwd />*/}
  {/*<Home />*/}
  {/*<AddPassword />*/}
  </BrowserRouter>
);
