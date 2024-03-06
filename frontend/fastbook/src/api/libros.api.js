import axios from "axios";

const librosApi = axios.create({   
    baseURL: "http://localhost:8000/libros/",
});

export const getAllLibros =  () => librosApi.get("/");

export const getLibro = (id) => librosApi.get(`/${id}`);

export const createLibro = (libro) => librosApi.post("/", libro);

export const updateLibro = (id, libro) => librosApi.put(`/${id}/`, libro);

export const deleteLibro = (id) => librosApi.delete(`/${id}`);

