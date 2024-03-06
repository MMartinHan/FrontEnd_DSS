import axios from "axios";

const prestamosApi = axios.create({   
    baseURL: "http://localhost:8000/prestamos/",
});

export const getPrestamos =  () => prestamosApi.get("/");