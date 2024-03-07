// Estu_prestamos.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Estu_prestamos.css'; // Importa tu archivo de estilos
import Navbar from '../components/Navbar';
import Header from '../components/header';

const Estu_prestamos = () => {
  const [detalles, setDetalles] = useState([]);

  useEffect(() => {
    // Función para obtener detalles de la API
    const fetchDetalles = async () => {
      try {
        const response = await axios.get('http://localhost:8000/detalles_/');

        // Filtrar detalles
        const detallesFiltrados = response.data.filter((detalle) => detalle.estudiante.id === 1);

        setDetalles(detallesFiltrados);
      } catch (error) {
        console.error('Error al obtener detalles:', error);
      }
    };

    // Llamada a la función para cargar detalles al montar el componente
    fetchDetalles();
  }, []);

  return (

    <div className="prestamos-container">
      <Navbar />  
      <br />
      <h1>Detalles de Prestamos</h1>
      <table className="prestamos-table">
        <thead>
          <tr>
            <th>ID Prestamo</th>
            <th>Autor</th>
            <th>Libro</th>
            <th>Descripcion</th>
            <th>Prestamo ID</th>
            <th>Fecha Entrega</th>
            <th>Fecha de Devolucion</th>
          </tr>
        </thead>
        <tbody>
          {detalles.map((detalle) => (
            <tr key={detalle.id}>
              <td>{detalle.id}</td>
              <td>{detalle.autor.autor_nombre}</td>
              <td>{detalle.libro.libro_nombre}</td>
              <td>{detalle.libro.libro_descripcion}</td>
              <td>{detalle.prestamo.id}</td>
              <td>{detalle.prestamo.prestamo_fechaEnt}</td>
              <td>{detalle.prestamo.prestamo_fechaDev}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Estu_prestamos;
