// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Components/Login';
import Home from '../Components/Home';
import Register from '../Components/Register';
import Productos from '../Components/Productos';
import Comida from '../Components/Comida';
import Carrito from '../Components/Carrito';
import Vestimenta from '../Components/Vestimenta';
import Navbar from '../Components/Navbar';

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/comida' element={<Comida />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/vestimenta' element={<Vestimenta />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
