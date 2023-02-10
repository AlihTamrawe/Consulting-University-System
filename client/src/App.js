import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Navbar from './views/Navbar';
import NavSide from './views/NavSide';

export default function App() {
  return (
      <div>
        <NavSide/>
        <div>
        <Navbar/>

        </div>
        <Routes>
        <Route path={"/s"} element={<Dashboard x="Consulting"/>} />
</Routes>    
     
    </div>
  );
}