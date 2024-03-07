import React, { useState } from "react";
import "../css/add_book.css";
import NavbarUser from "../components/NavBarUser";

const AddBook = () => {
    // Suponiendo que tienes un estado de autores disponibles
    const [autoresDisponibles] = useState(["1", "2", "3"]);

    // Estados para los campos del libro
    const [nombreLibro, setNombreLibro] = useState('');
    const [autorSeleccionado, setAutorSeleccionado] = useState('');
    const [fechaPublicacion, setFechaPublicacion] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [stock, setStock] = useState(0);

    // Manejadores de cambios en los campos
    const handleNombreLibroChange = (e) => {
        setNombreLibro(e.target.value);
    };

    const handleAutorChange = (e) => {
        setAutorSeleccionado(e.target.value);
    };

    const handleFechaPublicacionChange = (e) => {
        setFechaPublicacion(e.target.value);
    };

    const handleDescripcionChange = (e) => {
        setDescripcion(e.target.value);
    };

    const handleStockChange = (e) => {
        setStock(e.target.value);
    };

    // Manejador de envío del formulario
    const URL = 'http://localhost:8000/libros/';
    const Username = 'mateo';
    const Password = 'mateo123';
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            autor_id: autorSeleccionado,
            libro_nombre: nombreLibro,
            libro_fechaPub: fechaPublicacion,
            libro_descripcion: descripcion,
            libro_stock: stock  
        }
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(Username + ':' + Password)
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Libro agregado:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="add-book-container">
            <NavbarUser />
            <h1>Agregar Libro</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombreLibro">Nombre del libro:</label>
                    <input type="text" id="nombreLibro" value={nombreLibro} onChange={handleNombreLibroChange} />
                </div>
                <div>
                    <label htmlFor="fechaPublicacion">Fecha de publicación:</label>
                    <input type="date" id="fechaPublicacion" value={fechaPublicacion} onChange={handleFechaPublicacionChange} />
                </div>
                <div>
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea id="descripcion" value={descripcion} onChange={handleDescripcionChange}></textarea>
                </div>
                <div>
                    <label htmlFor="stock">Stock:</label>
                    <input type="number" id="stock" value={stock} onChange={handleStockChange} />
                </div>
                <div>
                    <label htmlFor="autor">Autor:</label>
                    <select id="autor" value={autorSeleccionado} onChange={handleAutorChange}>
                        <option value="">Selecciona un autor</option>
                        {autoresDisponibles.map((autor, index) => (
                            <option key={index} value={autor}>{autor}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
}

export default AddBook;
