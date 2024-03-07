import React from "react";
import "../css/Catalogo.css"; // Ajusta la ruta según la ubicación de tu archivo CSS
import Header from "../components/header";
import SearchComponent from "../components/SearchComponent";

const Catalogo = () => {

  return (
    <div>
      
      <SearchComponent /> 
      {}
    </div>
  );
};

const reservarLibro = (libroId) => {
  // Lógica para reservar el libro
  console.log(`Reservar libro con ID: ${libroId}`);
};

export default Catalogo;
