import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Catalogo from './pages/Catalogo';
import Estu_prestamos from './pages/Estu_prestamos';
import Login from './pages/login';
import './App.css';
import Navbar from './components/Navbar';
import MainBibliotecario from './pages/main_bibliotecario';
import AddBook from './pages/add_book';
import AddAuthor from './pages/add_author';
import Prestamos from './pages/prestamos';
import { UserProvider } from './components/context';  

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/mis_prestamos" element={<Estu_prestamos />} />
        <Route path="/prestamos" element={<Prestamos />} />
        <Route path="/main_bibliotecario" element={<MainBibliotecario />} />
        <Route path="/add_author" element={<AddAuthor />} />
        <Route path="/add_book" element={<AddBook />} />
      </Routes>
    </UserProvider>
  );
}

export default App;