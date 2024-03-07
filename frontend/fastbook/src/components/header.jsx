import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css'
import logoImage from '../assets/logo_espe.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="Logo_espe" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/catalogo">Catalogo</Link>
          </li>
          <li className="nav-item">
            <Link to="/mis_prestamos">Mis Prestamos</Link>
          </li>
          <li className="nav-item">
            <Link to="/carrito">Carrito</Link>
          </li>
          <li className="nav-item login-button">
            <a href="#">Ingresar</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
