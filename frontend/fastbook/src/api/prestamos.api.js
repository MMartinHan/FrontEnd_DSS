import axios from "axios";
import UserContext from "../components/context"

const prestamosApi = axios.create({   
    baseURL: "http://localhost:8000/prestamos/",
});

const Username = 'mateo';
const Password = 'mateo123';

export const getAllPrestamos =  () => prestamosApi.get("/");

export const getPrestamo = (id) => prestamosApi.get(`/${id}`);

export const createPrestamo = (prestamo) => prestamosApi.post("/", prestamo);

export const updatePrestamo = (id, prestamo) => prestamosApi.put(`/${id}/`, prestamo);

export const deletePrestamo = (id) => prestamosApi.delete(`/${id}`);


// api/prestamos.api.js
export const crearPrestamo = async (prestamoData) => {
      const response = await fetch('http://localhost:8000/prestamos/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(Username + ':' + Password)
        },
        body: JSON.stringify(prestamoData),
        credentials: 'include',
      })
      return response.json()
        .then(data => {
            console.log('Prestamo:', data);
            return data;
        })
        .catch((error) => {
            console.error('Error:', error);
        });

  };
  
  

