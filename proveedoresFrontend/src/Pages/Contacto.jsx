import React, { useState } from "react";
import Swal from "sweetalert2";
import PaginaLayaout from "../components/PaginaLayout";

export default function Contacto() {
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        mensaje: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mostrar alerta con SweetAlert2
        Swal.fire({
            title: "¡Mensaje enviado!",
            text: "Gracias por contactarnos.",
            icon: "success",
            confirmButtonColor: "#7c3aed", // morado 500
            background: "#1f2937", // gris oscuro
            color: "#ffffff", // texto blanco
        });

        // Limpiar formulario
        setFormData({
            nombre: "",
            correo: "",
            mensaje: "",
        });
    };

    return (
        <PaginaLayaout>
            <h1 className="text-purple-500 text-4xl font-bold mb-6 text-center">
                Contáctanos
            </h1>
            <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg text-gray-200 space-y-6"
            >
                <div>
                    <label className="block mb-2 text-sm font-medium">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium">Correo</label>
                    <input
                        type="email"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium">Mensaje</label>
                    <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-purple-500 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded shadow"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </PaginaLayaout>
    );
}
