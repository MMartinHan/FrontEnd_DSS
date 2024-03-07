import React, { useState, useEffect } from "react";
import "../css/prestamo.css";
import NavbarUser from "../components/NavBarUser";

const Prestamos = () => {
    const [prestamos, setPrestamos] = useState([]);

    useEffect(() => {
        // Aquí puedes hacer una llamada a tu backend para obtener la lista de préstamos
        // Por ahora, vamos a simular algunos préstamos
        const dummyPrestamos = [
            { id: 1, libro: "Libro 1", usuario: "Usuario 1", fecha: "2024-03-06" },
            { id: 2, libro: "Libro 2", usuario: "Usuario 2", fecha: "2024-03-07" },
            { id: 3, libro: "Libro 3", usuario: "Usuario 3", fecha: "2024-03-08" }
        ];
        setPrestamos(dummyPrestamos);
    }, []);

    return (
        <div>
            <NavbarUser />
            <h1>Prestamos</h1>
            <div className="prestamo-list">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Libro</th>
                            <th>Usuario</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prestamos.map((prestamo, index) => (
                            <tr key={index}>
                                <td>{prestamo.id}</td>
                                <td>{prestamo.libro}</td>
                                <td>{prestamo.usuario}</td>
                                <td>{prestamo.fecha}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Prestamos;
