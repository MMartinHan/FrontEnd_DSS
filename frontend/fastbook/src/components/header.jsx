import React from 'react';
import { Link } from 'react-router-dom'; // Ajusta según la librería de enrutamiento que estés utilizando
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="assets/logo1.jpeg" alt="Logo" />
                <span>Nombre de la Biblioteca</span>
            </div>
            <nav className="nav">
                <Link to="/catalogo">Catálogo</Link>
                <Link to="/prestamos">Préstamos</Link>
                <Link className="cart-icon" onClick={mostrarCarrito}>🛒</Link>
            </nav>
        </header>
    );
};


const mostrarCarrito = () => {
    // Lógica para mostrar el carrito de compras
    // Puedes utilizar alguna biblioteca de JavaScript o implementar tu propia lógica
    console.log("Mostrar carrito");
};

export default Header;
