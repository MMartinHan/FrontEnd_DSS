import React, { useState, useEffect, useContext } from "react";
import "../css/add_book.css";
import NavbarUser from "../components/NavBarUser";
import UserContext from "../components/context";

const URL = 'http://localhost:8000/libros/';
const AddBook = () => {
    // Suponiendo que tienes un estado de autores disponibles
    const [autoresDisponibles, setAutoresDisponibles] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        const url_autores = 'http://localhost:8000/autores/';
        fetch(url_autores,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Autores:', data);
            setAutoresDisponibles(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, []);

    // Estados para los campos del libro
    const [nombreLibro, setNombreLibro] = useState('');
    const [autorSeleccionado, setAutorSeleccionado] = useState('');
    const [fechaPublicacion, setFechaPublicacion] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [stock, setStock] = useState(0);
    const [librosDisponibles, setLibrosDisponibles] = useState([]);

    useEffect(() => {
        fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Libros:', data);
            setLibrosDisponibles(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, []);


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
            setLibrosDisponibles([...librosDisponibles, data]);
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
                        {autoresDisponibles.map((autor) => (
                            <option key={autor.id} value={autor.id}>{autor.autor_nombre}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Agregar</button>
            </form>

            <h2>Libros disponibles</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Fecha de publicación</th>
                        <th>Descripción</th>
                        <th>Stock</th>
                        <th>Autor</th>
                    </tr>
                </thead>
                <tbody>
                    {librosDisponibles.map((libro) => (
                        <tr key={libro.id}>
                            <td>{libro.libro_nombre}</td>
                            <td>{libro.libro_fechaPub}</td>
                            <td>{libro.libro_descripcion}</td>
                            <td>{libro.libro_stock}</td>
                            <td>{libro.autor_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AddBook;
