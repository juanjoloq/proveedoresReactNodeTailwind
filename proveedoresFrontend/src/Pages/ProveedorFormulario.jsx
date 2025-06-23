import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PaginaLayaout from "../components/PaginaLayout";
import { useProveedores } from "../hooks/useProveedores";

export default function ProveedorFormulario() {
    const navigate = useNavigate();
    const location = useLocation();
    const proveedorParaEditar = location.state;

    const formRef = useRef(null);

    const {
        formProveedorData,
        setFormProveedorData,
        guardarProveedor,
        isCreating,
        setIsCreating,
        errores,
        setErrores,
    } = useProveedores();

    useEffect(() => {
        if (proveedorParaEditar) {
            setFormProveedorData({
                id: proveedorParaEditar.id,
                nombre: proveedorParaEditar.nombre || "",
                email: proveedorParaEditar.email || "",
                telefono: proveedorParaEditar.telefono || "",
                direccion: proveedorParaEditar.direccion || "",
            });
            setIsCreating(false);
        } else {
            setFormProveedorData({
                nombre: "",
                email: "",
                telefono: "",
                direccion: "",
            });
            setIsCreating(true);
        }

        setErrores({});
    }, []);

    const onChangeInputs = (e) => {
        setFormProveedorData({
            ...formProveedorData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const exito = await guardarProveedor();
        if (exito) {
            navigate("/proveedores");
        }
    };

    return (
        <PaginaLayaout>
            <form
                id="miFormulario"
                ref={formRef}
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg text-gray-200 space-y-6"
            >
                <h2 className="text-2xl font-bold text-purple-400 mb-4 text-center">
                    {isCreating ? "Registrar Proveedor" : "Editar Proveedor"}
                </h2>

                <div>
                    <label htmlFor="nombre" className="block mb-2 text-sm">Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        value={formProveedorData.nombre || ""}
                        onChange={onChangeInputs}
                        className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {errores.nombre && <span className="text-red-400 text-sm">{errores.nombre}</span>}
                </div>

                <div>
                    <label htmlFor="email" className="block mb-2 text-sm">Correo:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formProveedorData.email || ""}
                        onChange={onChangeInputs}
                        className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {errores.email && <span className="text-red-400 text-sm">{errores.email}</span>}
                </div>


                <div>
                    <label htmlFor="telefono" className="block mb-2 text-sm">Teléfono:</label>
                    <input
                        type="text"
                        name="telefono"
                        id="telefono"
                        value={formProveedorData.telefono || ""}
                        onChange={onChangeInputs}
                        className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {errores.telefono && <span className="text-red-400 text-sm">{errores.telefono}</span>}
                </div>

                <div>
                    <label htmlFor="direccion" className="block mb-2 text-sm">Dirección:</label>
                    <input
                        type="text"
                        name="direccion"
                        id="direccion"
                        value={formProveedorData.direccion || ""}
                        onChange={onChangeInputs}
                        className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {errores.direccion && <span className="text-red-400 text-sm">{errores.direccion}</span>}
                </div>

                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-2 rounded"
                    >
                        {isCreating ? "Registrar" : "Actualizar"}
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/proveedores")}
                        className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded"
                    >
                        Volver
                    </button>
                </div>
            </form>
        </PaginaLayaout>
    );
}
