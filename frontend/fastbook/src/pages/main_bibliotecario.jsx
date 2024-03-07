import React from "react";
import { Link } from "react-router-dom";
import Header from '../components/header.jsx'; // Ajusta la ruta según la ubicación de tu componente Header
import "../css/main_bibliotecario.css";
import prestamos from "../assets/prestamo.jpg";
import agregar from "../assets/agregar_libro.jpg";
import agregar_autor from "../assets/agregar_autor.png";
import NavbarUser from "../components/NavBarUser.jsx";

const MainBibliotecario = () => {
    return (
        <div>
            <NavbarUser />
            <div className="container">
                <Link to="/prestamos">
                    <table className="table_thead_th" sx={{ width: "100%" }}>
                        <tr className="table_tbody_tr">
                            <td><img src={prestamos} className="image_prestamos" /></td>
                        </tr>
                        <tr className="table_tbody_tr">
                            <td>Ver préstamos</td>
                        </tr>
                    </table>
                </Link>
            </div>
            <div className="container">
                <Link to="/add_book">
                    <table className="table_thead_th" sx={{ width: "100%" }}>
                        <tr className="table_tbody_tr">
                            <td><img src={agregar} className="image_prestamos" /></td>
                        </tr>
                        <tr className="table_tbody_tr">
                            <td>Agregar libro</td>
                        </tr>
                    </table>
                </Link>
            </div>
            <div className="container">
                <Link to="/add_author">
                    <table className="table_thead_th" sx={{ width: "100%" }}>
                        <tr className="table_tbody_tr">
                            <td><img src={agregar_autor} className="image_prestamos" /></td>
                        </tr>
                        <tr className="table_tbody_tr">
                            <td>Agregar autor</td>
                        </tr>
                    </table>
                </Link>
            </div>
        </div>
    );
}

export default MainBibliotecario;
