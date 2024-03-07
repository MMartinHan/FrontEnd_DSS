import React, { useState } from "react";
import "../css/add_author.css";

const AddAuthor = () => {
    const [authorName, setAuthorName] = useState('');
    const [authors, setAuthors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setAuthorName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (authorName.trim() !== '') {
            setAuthors([...authors, authorName]);
            setAuthorName('');
        }
    };

    const handleEdit = (index) => {
        // Implementa la lógica para editar el autor aquí
        console.log('Editar autor en el índice:', index);
    };

    const handleDelete = (index) => {
        const updatedAuthors = [...authors];
        updatedAuthors.splice(index, 1);
        setAuthors(updatedAuthors);
    };

    const handleSearch = () => {
        // Implementa la lógica para filtrar la lista de autores aquí
        console.log('Buscar autores con término:', searchTerm);
    };

    return (
        <div>
            <div className="container">
                <h3>Agregar Autor</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nombre del autor"
                        value={authorName}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Agregar</button>
                </form>
            </div>
            <div className="container">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Buscar autor"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch}>Buscar</button>
                </div>
            </div>
            <div className="container author-list">
                <h3>Autores</h3>
                <div className="author-table">
                    <ul>
                        {
                            authors.map((author, index) => (
                                <li key={index}>
                                    {author}
                                    <button onClick={() => handleEdit(index)}>Editar</button>
                                    <button onClick={() => handleDelete(index)}>Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AddAuthor;
