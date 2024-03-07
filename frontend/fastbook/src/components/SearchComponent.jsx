import React, { useState, useEffect } from 'react';
import '../css/SearchComponent.css'; // Importa tu archivo de estilos
import {createPrestamo} from "../api/prestamos.api"
import {createDetalle} from "../api/detallePrestamos.api"


const SearchComponent = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  // Función para traer los datos de la API
  const URL = 'http://localhost:8000/libros_/';
  const URL_base = 'http://localhost:8000/libros/';

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setBooks(data);
  };

  const estudianteId = 1;
  const fechaEntrega = '2024-03-07'; 
  const fechaDevolucion = '2024-03-14'; 

  // Construir el objeto Prestamo
  const prestamoData = {
    estudiante: estudianteId,
    prestamo_fechaEnt: fechaEntrega,
    prestamo_fechaDev: fechaDevolucion,
  };

  // Función para reservar un libro
  //createPrestamo(prestamoData);

  /*const showData2 = async () => {
    const response = await fetch(URL_base);
    const data_ = await response.json();
    setBooks(data_);
  };

  const handleStockChange = (e) => {
    setStock(e.target.value);
};*/


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
                <button onClick={() => createPrestamo(prestamoData)}>
                  Reservar
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
