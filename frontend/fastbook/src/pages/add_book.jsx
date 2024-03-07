import React, { useState } from "react";
import "../css/add_book.css";

const AddBook = () => {
    // Suponiendo que tienes un estado de autores disponibles
    const [autoresDisponibles] = useState(["Autor 1", "Autor 2", "Autor 3"]);

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
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos al backend
        console.log('Libro agregado:', { nombreLibro, autorSeleccionado, fechaPublicacion, descripcion, stock });
    };

    return (
        <div className="add-book-container">
            <h1>Agregar Libro</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombreLibro">Nombre del libro:</label>
                    <input type="text" id="nombreLibro" value={nombreLibro} onChange={handleNombreLibroChange} />
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
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
}

export default AddBook;
