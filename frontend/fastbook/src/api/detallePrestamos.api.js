import axios from "axios";

const detallesApi = axios.create({   
    baseURL: "http://localhost:8000/detalles/",
});

export const getAllDetalles =  () => detallesApi.get("/");

export const getDetalle = (id) => detallesApi.get(`/${id}`);

export const createDetalle = (detalle) => detallesApi.post("/", detalle);

export const updateDetalle = (id, detalle) => detallesApi.put(`/${id}/`, detalle);

export const deleteDetalle = (id) => detallesApi.delete(`/${id}`);


