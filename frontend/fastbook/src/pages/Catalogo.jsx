import React from "react";
import "../css/Catalogo.css"; // Ajusta la ruta según la ubicación de tu archivo CSS
import Header from "../components/header";

const Catalogo = () => {
  // Datos de muestra (esto se reemplazará con datos de la base de datos en el futuro)
  const libros = [
    {
      id: 1,
      nombre: "100 anios de soledad",
      autor: "Gabriel Garcia Marquez",
      stock: 5,
    },
    {
      id: 2,
      nombre: "Harry Potter",
      autor: "J.K. Rowling",
      stock: 8,
    },
    {
        id: 3,
        nombre: "Habitos Atomicos",
        autor: "James Clear",
        stock: 8,
    },
    {
        id: 4,
        nombre: "Finanzas Descencriptadas",
        autor: "Andres Panasiuk",
        stock: 8,
    },
    {
        id: 5,
        nombre: "Programacion Orientada a Objetos",
        autor: "Cay Horstmann",
        stock: 8,
    }
    // Agrega más libros según sea necesario
  ];

  return (
    <div>
      
      <div className="container">
        <div className="catalogo">
          <h1 className="catalogo__title">Catálogo</h1>
          <div className="catalogo__group">
            <input type="text" required className="catalogo__group__input" />
            <label className="catalogo__group__label">Buscar</label>
          </div>
          <button className="catalogo__search">Buscar</button>

          {/* Tabla con la lista de libros */}
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
                    {/* Agrega aquí el botón o icono para reservar */}
                    <button onClick={() => reservarLibro(libro.id)}>
                      Reservar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const reservarLibro = (libroId) => {
  // Lógica para reservar el libro
  console.log(`Reservar libro con ID: ${libroId}`);
};

export default Catalogo;
