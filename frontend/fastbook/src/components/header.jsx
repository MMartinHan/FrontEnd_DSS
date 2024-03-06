import React, { useState, useEffect } from 'react';
import '../css/header.css'; // Ajusta la ruta según la ubicación de tu archivo CSS

const Header = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Lógica para obtener el nombre de usuario desde la API con fetch
        // Reemplaza la URL con la correspondiente a tu API
        fetch('http://localhost:8000/user/')
            .then(response => response.json())
            .then(data => setUserName(data.name))
            .catch(error => console.error('Error al obtener el nombre de usuario:', error));
    }, []);

    const handleLogout = () => {
        // Lógica para cerrar sesión
        console.log("Cerrar sesión");
        // Puedes implementar aquí la lógica necesaria para cerrar sesión
    };

    return (
        <header className="custom-header">
            <div className="logo">
                <img src="assets/logo_espe.png" alt="Logo" />
            </div>
            {userData && (
                <div className="user-info">
                    <img src={userData.avatarUrl || "assets/default_user.png"} alt="Usuario" className="user-avatar" />
                    <span>{userData.nombre}</span>
                </div>
            )}
            <div className="logout-button" onClick={handleLogout}>
                Cerrar Sesión
            </div>
        </header>
    );
};

export default Header;
