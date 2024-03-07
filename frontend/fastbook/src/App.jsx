import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Catalogo from './pages/Catalogo';
import Estu_prestamos from './pages/Estu_prestamos';
import Login from './pages/login';
import './App.css'
import Navbar from './components/Navbar';


function App() {
  return (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/mis_prestamos" element={<Estu_prestamos />} />
        </Routes>
  );
}

export default App;
