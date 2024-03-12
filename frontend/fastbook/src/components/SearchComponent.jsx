import React, { useState, useEffect, useContext } from 'react';
import '../css/SearchComponent.css';
import { createPrestamo } from '../api/prestamos.api';
import { createDetalle } from '../api/detallePrestamos.api';
import { crearPrestamo } from '../api/prestamos.api';
import { crearDetalle } from '../api/detallePrestamos.api';
import UserContext from "./context";

const SearchComponent = () => {
  const {user} = useContext(UserContext);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');


  const URL = 'http://localhost:8000/libros_/';

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setBooks(data);
  };

  const estudianteId = parseInt(user.id, 10);

// 10 es la base numérica, que se utiliza comúnmente y significa base decimal. Puedes ajustarla según tus necesidades.

  const estuId = 2;

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const reserveBook = async (book) => {
    const fechaEntrega = new Date().toISOString().split('T')[0];
    const fechaDevolucion = new Date(
      new Date().getTime() + 10 * 24 * 60 * 60 * 1000
    ).toISOString().split('T')[0];

    // Crear Prestamo
    const prestamoData = {
      estudiante: estudianteId,
      prestamo_fechaEnt: fechaEntrega,
      prestamo_fechaDev: fechaDevolucion,
    };

    console.log(prestamoData);
    const prestamoResponse = await crearPrestamo(prestamoData);

    if (prestamoResponse.id) {
      // Crear DetallePrestamo utilizando el ID del Prestamo recién creado
      const detalleData = {
        libro: book.id,
        autor: book.autor_id.id,
        estudiante: estudianteId,
        prestamo: prestamoResponse.id,
      };

      await crearDetalle(detalleData);

      // Actualizar la lista de libros después de reservar
      showData();
    } else {
      console.error('Error al crear el Prestamo');
    }
  };

  const results = !search
    ? books
    : books.filter((dato) =>
        dato.libro_nombre.toLowerCase().includes(search.toLowerCase())
      );

  useEffect(() => {
    showData();
  }, []);

  return (
    <div className="search-container">
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Search"
        className="form-control"
      />
      <table className="books-table">
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
                <button onClick={() => reserveBook(book)}>Reservar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchComponent;
