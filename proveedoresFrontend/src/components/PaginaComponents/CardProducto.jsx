import React from "react";
import { MailPlus, Info } from "lucide-react";
import Swal from "sweetalert2";


export default function CardProducto({ imgs, nombre, exp }) {
    const handleClick = () => {
    Swal.fire({
            title: "Correo Copiado!",
            text: "Se copio el correo correctamente",
            icon: "success",
            confirmButtonText: "Cerrar",
            background: '#272727',
            color: '#c9c9c9',
            timer: 4000,
            timerProgressBar: true
        });
    };
    const handleClick2 = () => {
        Swal.fire({
            title: "Detalles",
            text: `Este es uno de nuestros proveedores ${nombre} su correo es ${exp}`,
            icon: "info",
            confirmButtonText: "Cerrar",
            background: '#272727',
            color: '#c9c9c9',
            timer: 4000,
            timerProgressBar: true
        });
    }
    return (
        <div className="w-64 h-72 bg-gray-800 rounded-lg shadow-xl inset-shadow-xs flex flex-col items-center justify-center p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img
                src={imgs}
                alt={nombre}
                className="w-32 h-32 object-cover mb-4 border border-gray-300"
            />
            <p className="font-semibold text-white text-lg mb-1">{nombre}</p>
            <p className="text-sm text-purple-500 mb-4">{exp}</p>

            <div className="flex space-x-4">
                <button 
                    className="bg-purple-700 hover:bg-purple-800 text-white p-2 rounded flex items-center justify-center gap-2 cursor-pointer"
                    onClick={handleClick}
                    >
                    <MailPlus size={20} /> Correo
                </button>
                <button 
                className="bg-purple-700 hover:bg-purple-800 text-white p-2 rounded flex items-center justify-center gap-2 cursor-pointer"
                onClick={handleClick2}
                >
                    <Info size={20} /> Detalles
                </button>
            </div>
        </div>
    );
}
