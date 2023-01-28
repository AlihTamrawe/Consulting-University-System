import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Navbar from './views/Navbar';

export default function App() {
  return (
      <div>
        <div>
        <Navbar/>
  
        </div>
        <Routes>
        <Route path={"/s"} element={<Dashboard x="weeeeeeeee"/>} />
</Routes>    
     
    </div>
  );
}