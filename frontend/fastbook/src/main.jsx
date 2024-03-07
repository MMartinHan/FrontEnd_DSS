import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import Login from './pages/login.jsx'
import Catalogo from './pages/Catalogo.jsx'
import Carrito from './pages/Carrito.jsx';
import SearchComponent from './components/SearchComponent.jsx';
import Estu_prestamos from './pages/Estu_prestamos.jsx';
import MainBibliotecario from './pages/main_bibliotecario.jsx';
import AddAuthor from './pages/add_author.jsx';
import Prestamos from './pages/prestamos.jsx';
import AddBook from './pages/add_book.jsx';
import Header from './components/header.jsx'

ReactDOM.render(
  <BrowserRouter> {/* Envuelve tu App con BrowserRouter */}
    <Estu_prestamos/>
  </BrowserRouter>,
  document.getElementById('root')
);

