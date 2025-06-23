import axios from "axios"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"


const API_URL = "http://localhost:3000/proveedor"

export const useProveedores = (initial = {
    nombre: "",
    email: "",
    telefono: "",
    direccion: ""
    }) => {
    const [formProveedorData, setFormProveedorData] = useState(initial);
    const [isCreating, setIsCreating] = useState(false);
    const [errores, setErrores] = useState({});
    const [proveedor, setProveedor] = useState([]);

    useEffect(() =>{
        cargarProveedores();
    }, []);

    const cargarProveedores = async () => {
        try {
            const res = await axios.get(API_URL);
            setProveedor(res.data);
        } catch (error) {
            console.error("Error al cargar categorías:", error);
            Swal.fire("Error", "No se pudo cargar los datos de la categoría", "error");
        }
    }


    const validarFormulario = () => {
    let erroresTemp = {};
        if (!formProveedorData.nombre || formProveedorData.nombre.trim() === "") {
            erroresTemp.nombre = "El nombre es obligatorio";
        }
        if (!formProveedorData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formProveedorData.email)) {
            erroresTemp.email = "Correo inválido";
        }
        if (!formProveedorData.telefono || !/^\d{7,}$/.test(formProveedorData.telefono)) {
            erroresTemp.telefono = "Teléfono inválido";
        }
        if (!formProveedorData.direccion || formProveedorData.direccion.trim() === "") {
            erroresTemp.direccion = "La dirección es obligatoria";
        }

        setErrores(erroresTemp);
        return Object.keys(erroresTemp).length === 0;
    };


    const guardarProveedor = async () => {
    if (!validarFormulario()) {
        Swal.fire({
            title: "Datos no válidos",
            text: "Por favor completa correctamente el formulario.",
            icon: "error",
            background: "#272727",
            color: "#c9c9c9"
        });
        return false;
    }

    try {
        if (formProveedorData.id) {
            await axios.put(`${API_URL}/${formProveedorData.id}`, formProveedorData);
            Swal.fire({
                title: "Actualizado",
                text: "Proveedor actualizado correctamente",
                icon: "success",
                background: "#272727",
                color: "#c9c9c9"
            });
        } else {
            await axios.post(API_URL, formProveedorData);
            Swal.fire({
                title: "Creado",
                text: "Proveedor creado correctamente",
                icon: "success",
                background: "#272727",
                color: "#c9c9c9"
            });
        }

        cargarProveedores();
        return true; 
    } catch (error) {
        console.error("Error al guardar proveedor:", error);
        Swal.fire({
            title: "Error",
            text: "No se pudo guardar el proveedor",
            icon: "error",
            background: "#272727",
            color: "#c9c9c9"
        });
        return false;
    }
};

    const eliminarProveedor = async (id) => {
        const result = await Swal.fire({
            title: "¿Estás seguro?",
            text: "Esto eliminará la categoría.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            background: "#272727",
            color: "#c9c9c9"
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`${API_URL}/${id}`);
                Swal.fire({
                    title: "Eliminado",
                    text: "Categoría eliminada",
                    icon: "success",
                    background: "#272727",
                    color: "#c9c9c9"
                });
                cargarProveedores();
            } catch (error) {
                console.error("Error al eliminar categoría:", error);
                Swal.fire({
                    title: "Error",
                    text: "No se pudo eliminar la categoría",
                    icon: "error",
                    background: "#272727",
                    color: "#c9c9c9"
                });
            }
        }
    };

    const editarProveedor = (proveedor) => {
        setFormProveedorData(proveedor);
        setIsCreating(false);
        setErrores({});
    };

    return {
        editarProveedor,
        guardarProveedor,
        eliminarProveedor,
        cargarProveedores,
        proveedor,
        isCreating,
        errores,
        setFormProveedorData,
        formProveedorData,
        setErrores, 
        setIsCreating, 
    }


}