import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Login from './pages/login.jsx';
import Catalogo from './pages/Catalogo.jsx';
import Carrito from './pages/Carrito.jsx';
import SearchComponent from './components/SearchComponent.jsx';
import Estu_prestamos from './pages/Estu_prestamos.jsx';
import MainBibliotecario from './pages/main_bibliotecario.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Catalogo />
  </React.StrictMode>,
)
