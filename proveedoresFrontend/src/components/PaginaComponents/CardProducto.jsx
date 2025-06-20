import React from "react";
import { ShoppingCart, Info } from "lucide-react";
import Swal from "sweetalert2";


export default function CardProducto({ imgs, nombre, exp }) {
    const handleClick = () => {
    Swal.fire({
            title: "Producto Añadido!",
            text: "El producto se añadio al carrito",
            icon: "success",
            confirmButtonText: "Cerrar",
            timer: 4000,
            timerProgressBar: true
        });
    };
    const handleClick2 = () => {
        Swal.fire({
            title: "Detalles",
            text: `Esto es un ${nombre} vale ${exp} y tiene dos años de garantia`,
            icon: "info",
            confirmButtonText: "Cerrar",
            timer: 4000,
            timerProgressBar: true
        });
    }
    return (
        <div className="w-64 h-72 rounded-lg shadow-xl inset-shadow-xs flex flex-col items-center justify-center p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img
                src={imgs}
                alt={nombre}
                className="w-32 h-32 object-cover mb-4 border border-gray-300"
            />
            <p className="font-semibold text-lg mb-1">{nombre}</p>
            <p className="text-sm text-gray-600 mb-4">{exp}</p>

            <div className="flex space-x-4">
                <button 
                    className="bg-purple-700 hover:bg-purple-800 text-white p-2 rounded flex items-center justify-center gap-2 cursor-pointer"
                    onClick={handleClick}
                    >
                    <ShoppingCart size={20} /> Añadir
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
