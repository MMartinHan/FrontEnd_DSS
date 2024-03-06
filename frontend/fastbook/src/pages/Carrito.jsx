import React, {useState, useEffect} from 'react';
import "../css/Carrito.css"; 
import Navbar from "../components/Navbar";

const Carrito = () => { 

    const [prestamos, setPrestamos] = useState([]);
    const [search, setSearch] = useState('');

    const URL = 'http://localhost:8000/prestamos/';

    return (
        <div>
            <Navbar />

        </div>
    );

}

export default Carrito;