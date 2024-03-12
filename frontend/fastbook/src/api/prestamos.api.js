import axios from "axios";

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
    try {
      const response = await fetch('http://localhost:8000/prestamos/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(Username + ':' + Password)
        },
        body: JSON.stringify(prestamoData),
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error('Error al crear el Prestamo');
      }
  
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  

