import axios from "axios";

const estudiantesApi = axios.create({   
    baseURL: "http://localhost:8000/estudiantes/",
});

export const getAllEstudiantes =  () => estudiantesApi.get("/");

export const getEstudiante = (id) => estudiantesApi.get(`/${id}`);

export const createEstudiante = (estudiante) => estudiantesApi.post("/", estudiante);

export const updateEstudiante = (id, estudiante) => estudiantesApi.put(`/${id}/`, estudiante);

export const deleteEstudiante = (id) => estudiantesApi.delete(`/${id}`);