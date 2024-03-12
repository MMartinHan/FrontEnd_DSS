import axios from "axios";

const detallesApi = axios.create({   
    baseURL: "http://localhost:8000/detalles/",
});

const Username = 'mateo';
const Password = 'mateo123';

export const getAllDetalles =  () => detallesApi.get("/");

export const getDetalle = (id) => detallesApi.get(`/${id}`);

export const createDetalle = (detalle) => detallesApi.post("/", detalle);

export const updateDetalle = (id, detalle) => detallesApi.put(`/${id}/`, detalle);

export const deleteDetalle = (id) => detallesApi.delete(`/${id}`);

// api/detallePrestamos.api.js
export const crearDetalle = async (detalleData) => {
    try {
      const response = await fetch('http://localhost:8000/detalles/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(Username + ':' + Password)
        },
        body: JSON.stringify(detalleData),
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error('Error al crear el DetallePrestamo');
      }
  
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };



