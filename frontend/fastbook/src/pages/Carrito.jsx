import React from "react";
import "../css/Carrito.css"; 

const Carrito = () => { 

    return (
        <div>
            <div className="container">
                <div className="carrito">
                    <h1 className="carrito__title">Carrito de Compras</h1>
                    <table className="carrito__table">
                        <thead>
                            <tr>
                                <th>Nombre del Libro</th>
                                <th>Nombre del Autor</th>
                                <th>Cantidad Reservada</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>100 años de soledad</td>
                                <td>Gabriel Garcia Marquez</td>
                                <td>1</td>
                                <td><button>Eliminar</button></td>
                            </tr>
                            <tr>
                                <td>Harry Potter</td>
                                <td>J.K. Rowling</td>
                                <td>2</td>
                                <td><button>Eliminar</button></td>
                            </tr>
                            <tr>
                                <td>Habitos Atomicos</td>
                                <td>James Clear</td>
                                <td>3</td>
                                <td><button>Eliminar</button></td>
                            </tr>
                            <tr>
                                <td>Finanzas Descencriptadas</td>
                                <td>Andres Panasiuk</td>
                                <td>1</td>
                                <td><button>Eliminar</button></td>
                            </tr>
                            <tr>
                                <td>Programacion Orientada a Objetos</td>
                                <td>Cay Horstmann</td>
                                <td>2</td>
                                <td><button>Eliminar</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="carrito__checkout">Pagar</button>
                </div>
            </div>
        </div>
    );

}

export default Carrito;