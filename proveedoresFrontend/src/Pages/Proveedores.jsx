import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PaginaLayaout from "../components/PaginaLayout";
import { useProveedores } from "../hooks/useProveedores";

export default function Proveedores() {
    const {
        eliminarProveedor,
        cargarProveedores,
        proveedor
    } = useProveedores();

    const navigate = useNavigate();

    useEffect(() => {
        cargarProveedores();
    }, [cargarProveedores]);

    return (
        <PaginaLayaout>
            <h1 className="text-purple-500 text-4xl font-bold mb-6 text-center">
                Nuestros Proveedores
            </h1>

            <div className="flex justify-center mb-4">
                <button
                    className="bg-purple-500 hover:bg-purple-800 text-white px-4 py-2 rounded cursor-pointer"
                    onClick={() => navigate("/proveedores/formulario")}
                >
                    Registrar un Proveedor
                </button>
            </div>

            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full text-sm text-left text-gray-300">
                    <thead className="bg-gray-800 text-gray-100">
                        <tr>
                            <th className="px-6 py-3">#</th>
                            <th className="px-6 py-3">Nombre</th>
                            <th className="px-6 py-3">Correo</th>
                            <th className="px-6 py-3">Teléfono</th>
                            <th className="px-6 py-3">Dirección</th>
                            <th className="px-6 py-3 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-900 divide-y divide-gray-700">
                        {proveedor.map((pro) => (
                            <tr className="hover:bg-gray-800 transition" key={pro.id}>
                                <td className="px-6 py-4">{pro.id}</td>
                                <td className="px-6 py-4">{pro.nombre}</td>
                                <td className="px-6 py-4">{pro.email}</td>
                                <td className="px-6 py-4">{pro.telefono}</td>
                                <td className="px-6 py-4">{pro.direccion}</td>
                                <td className="px-6 py-4 text-center">
                                    <button
                                        className="text-purple-400 hover:underline mr-2"
                                        onClick={() => {
                                            navigate("/proveedores/formulario", {
                                                state: pro,
                                            });
                                        }}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="text-red-400 hover:underline"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            eliminarProveedor(pro.id);
                                        }}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </PaginaLayaout>
    );
}
