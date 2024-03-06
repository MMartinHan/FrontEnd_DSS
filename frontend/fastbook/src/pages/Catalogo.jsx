import React from "react";
import "../css/Catalogo.css"; // Ajusta la ruta según la ubicación de tu archivo CSS
import Header from "../components/header";
import SearchComponent from "../components/SearchComponent";

const Catalogo = () => {

  return (
    <div>
      
      <SearchComponent /> 
      {/*
      <div className="container">
        <div className="catalogo">
          <h1 className="catalogo__title">Catálogo</h1>
          <div className="catalogo__group">
            <input type="text" required className="catalogo__group__input" />
            <label className="catalogo__group__label">Buscar</label>
          </div>
          <button className="catalogo__search">Buscar</button>

          <table className="catalogo__table">
            <thead>
              <tr>
                <th>Nombre del Libro</th>
                <th>Nombre del Autor</th>
                <th>Cantidad Disponible</th>
                <th>Reservar</th>
              </tr>
            </thead>
            <tbody>
              {libros.map((libro) => (
                <tr key={libro.id}>
                  <td>{libro.nombre}</td>
                  <td>{libro.autor}</td>
                  <td>{libro.stock}</td>
                  <td>
                    <button onClick={() => reservarLibro(libro.id)}>
                      Reservar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
              </div>*/}
    </div>
  );
};

const reservarLibro = (libroId) => {
  // Lógica para reservar el libro
  console.log(`Reservar libro con ID: ${libroId}`);
};

export default Catalogo;
