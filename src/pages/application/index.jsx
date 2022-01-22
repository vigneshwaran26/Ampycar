import React from 'react'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from '../../components/features/navbar/Navbar';
import Login from './auth/login';
import Signup from './auth/signup';
import CarInventory from './carInventory';
import Landing from './landing/Landing';
import BookingSummary from './summary';

export default function ApplicationPage() {
    return (
       <>
       <Router>
         <Navbar/>
          <div>
            <Routes>
              <Route 
                path='/login' 
                element={<Login />} 
              />
              <Route 
                path='/signup' 
                element={<Signup />} 
              />
              <Route 
                path='/' 
                element={<Landing/>}
              />
              <Route 
                path='/carlist' 
                element={<CarInventory/>}
              />
              <Route 
                path='/summary' 
                element={<BookingSummary/>}
              />
            </Routes>
          </div>
       </Router>
       </>
    )
}
