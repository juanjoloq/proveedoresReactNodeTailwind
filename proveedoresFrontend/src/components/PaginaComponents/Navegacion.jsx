import React from "react";
import { Link } from "react-router-dom";


export default function NavegacionPag() {
    return (
        <div className="flex justify-between items-center px-10 py-4 bg-purple-800 text-white">

            <div>
                <h3 className="text-xl font-bold">Mi Tienda</h3>
            </div>

            <ul className="flex space-x-6 text-sm ">
                <li><Link to="/" className="hover:underline">Inicio</Link></li>
                <li><Link to="/proveedores" className="hover:underline">Proveedores</Link></li>
                <li><Link to="/contacto" className="hover:underline">Contactanos</Link></li>
            </ul>
        </div>
    )
}