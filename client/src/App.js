import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import Navbar from './views/Navbar';
import NavSide from './views/NavSide';
import MainC from './views/MainC';
import Register from './views/Register';



export default function App() {
  return (
      <div>
        <NavSide/>
        <div>
        <Navbar/>

        </div>
        <Routes>
        <Route path={"/s"} element={<Dashboard x="Consulting"/>} />
        <Route path={"/login"} element={ <MainC  /> } />
        <Route path={"/reg"} element={<Register x="Consulting"/>} />
        <Route path={"/consult"} element={<Login x="Consulting"/>} />

</Routes>    
     
    </div>
  );
}