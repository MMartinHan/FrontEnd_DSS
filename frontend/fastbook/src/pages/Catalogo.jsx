import React from "react";
import "../css/Catalogo.css"; // Ajusta la ruta según la ubicación de tu archivo CSS
import Header from "../components/header";
import SearchComponent from "../components/SearchComponent";
import Navbar from "../components/Navbar";

const Catalogo = () => {

  return (
    <div>
      <Navbar />
      <br />
      <h1> Catalogo de Libros </h1>
      <br />
      <SearchComponent /> 
    </div>
  );
};

const reservarLibro = (libroId) => {
  // Lógica para reservar el libro
  console.log(`Reservar libro con ID: ${libroId}`);
};

export default Catalogo;
