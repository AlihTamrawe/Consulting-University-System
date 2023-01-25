import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import Dashboard from './views/Dashboard';

export default function App() {
  return (
      <div>
        <div>
        <Dashboard x="no"/>
  
        </div>
        <Routes>
        <Route path={"/s"} element={<Dashboard x="weeeeeeeee"/>} />
</Routes>    
     
    </div>
  );
}