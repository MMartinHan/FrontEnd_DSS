import React from "react";
import "../css/main_bibliotecario.css";
import prestamos from "../assets/prestamo.jpg";
import agregar from "../assets/agregar_libro.jpg";
import agregar_autor from "../assets/agregar_autor.png";

const MainBibliotecario = () => {
    return(
        <div>
            <div className="container">
                <table className="table_thead_th" sx={{width: "100%"}}> 
                    <tr className="table_tbody_tr">
                        <td><img src={prestamos} className="image_prestamos" /></td>
                    </tr>
                    <tr className="table_tbody_tr">
                        <td>Ver prestamos</td>
                    </tr>
                </table>
            </div>
            <div>
                <table className="table_thead_th" sx={{width: "100%"}}> 
                    <tr className="table_tbody_tr">
                        <td><img src={agregar} className="image_prestamos" /></td>
                    </tr>
                    <tr className="table_tbody_tr">
                        <td>Agregar libro</td>
                    </tr>
                </table>
            </div>
            <div>
                <table className="table_thead_th" sx={{width: "100%"}}> 
                    <tr className="table_tbody_tr">
                        <td><img src={agregar_autor} className="image_prestamos" /></td>
                    </tr>
                    <tr className="table_tbody_tr">
                        <td>Agregar autor</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default MainBibliotecario;