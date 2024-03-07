import axios from "axios";

const autoresApi = axios.create({   
    baseURL: "http://localhost:8000/autores/",
});

export const getAllAutores =  () => autoresApi.get("/");

export const getAutor = (id) => autoresApi.get(`/${id}`);

export const createAutor = (autor) => autoresApi.post("/", autor);

export const updateDetalle = (id, autor) => autoresApi.put(`/${id}/`, autor);

export const deleteDetalle = (id) => autoresApi.delete(`/${id}`);