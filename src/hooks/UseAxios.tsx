import { } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Base_Url = import.meta.env.VITE_URL_API

export const ApiGet = async (endpoint:String) => {
        const response = await axios.get(`${Base_Url}${endpoint}`);
            if (response.status >= 201) {
                Swal.fire({
                    icon: "error",
                    title: "Acción fallida",
                    text: "No hay calificacion",
                });
            }    
    return response;
};

export const ApiPost = async (endpoint:string, data:any) => {
    const response = await axios.post(`${Base_Url}${endpoint}`, data);
    if (response.status == 201) {
        Swal.fire({
            icon: "success",
            title: "Acción exitosa",
            text: "Calificacion resgistrada",
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Acción fallida",
            text: "No se creo la nueva calificacion",
        });
    }
};

export const ApiPut = async (endpoint:String, data:any) => {
    const response = await axios.put(`${Base_Url}${endpoint}`, data);
    if (response.status == 200) {
        Swal.fire({
            icon: "success",
            title: "Acción exitosa",
            text: "Calificacion modificada",
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Acción fallida",
            text: "No se modifico la nueva calificacion",
        });
    }
};

export const ApiDelete = async (endpoint:string, data:any) => {
    const response = await axios.put(`${Base_Url}${endpoint}`, data);
    if (response.status == 200) {
        Swal.fire({
            icon: "success",
            title: "Acción exitosa",
            text: "Calificacion modificada",
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Acción fallida",
            text: "No se modifico la nueva calificacion",
        });
    }
};