import React, { useState, useEffect } from 'react';
import { createPrestamo } from '../api/prestamos.api';
import '../css/SearchComponent.css'; // Importa tu archivo de estilos

const SearchComponent = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  // Función para traer los datos de la API
  const URL = 'http://localhost:8000/libros_/';

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setBooks(data);
  };

  // Función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  // Método de filtrado
  const results = !search ? books : books.filter((dato) => dato.libro_nombre.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    showData();
  }, []);

  // Renderizamos la vista
  return (
    <div className="search-container">
      <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control' />
      <table className='books-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITULO</th>
            <th>AUTOR</th>
            <th>STOCK</th>
            <th>RESERVAR</th>
          </tr>
        </thead>
        <tbody>
          {results.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.libro_nombre}</td>
              <td>{book.autor_id.autor_nombre}</td>
              <td>{book.libro_stock}</td>
              <td>
                <button onClick={() => reservarLibro(book.id)}>
                  Agregar al Carrito
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const reservarLibro = (libroId) => {
  console.log(`Reservar libro con ID: ${libroId}`);
};

export default SearchComponent;
