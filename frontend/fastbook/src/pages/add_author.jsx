import React, { useState, useEffect } from "react";
import "../css/add_author.css";

const AddAuthor = () => {
    const [authorName, setAuthorName] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');
    const [authors, setAuthors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setAuthorName(e.target.value);
    };

    const URL = 'http://localhost:8000/autores/';
    const Username = 'mateo';
    const Password = 'mateo123';
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            autor_nombre: authorName,
            autor_fechaNac: fechaNacimiento,
            autor_nacionalidad: nacionalidad
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
            console.log('Autor agregado:', data);
            handleSearch();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    
    const handleEdit = (e) => {
        
    };

    const handleDelete = (index) => {
        const updatedAuthors = [...authors];
        updatedAuthors.splice(index, 1);
        setAuthors(updatedAuthors);
    };

    const handleSearch = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            console.log(data);
            setAuthors(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        handleSearch();
    }, []); 

    return (
        <div className="add-book-container">
            <h1>Agregar Autor</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="authorName">Nombre del autor:</label>
                    <input
                        type="text"
                        id="authorName"
                        value={authorName}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
                    <input
                        type="date"
                        id="fechaNacimiento"
                        value={fechaNacimiento}
                        onChange={(e) => setFechaNacimiento(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="nacionalidad">Nacionalidad:</label>
                    <input
                        type="text"
                        id="nacionalidad"
                        value={nacionalidad}
                        onChange={(e) => setNacionalidad(e.target.value)}
                    />
                </div>
                <button type="submit">Agregar</button>
            </form>
            <div className="container">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Buscar autor"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button>Buscar</button>
                </div>
            </div>
            <div><h3>Autores</h3></div>
            <div className="container author-list">
                <div className="author-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Fecha de nacimiento</th>
                                <th>Nacionalidad</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                        {authors.map((author, index) => (
                            <tr key={author.id}>
                                <td>{author.autor_nombre}</td>
                                <td>{author.autor_fechaNac}</td>
                                <td>{author.autor_nacionalidad}</td>
                                <td>
                                    <button onClick={() => handleEdit(index)}>Editar</button>
                                    <button onClick={() => handleDelete(index)}>Borrar</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AddAuthor;
