import React from "react";
import PaginaLayaout from "../components/PaginaLayout";
import CardProducto from "../components/PaginaComponents/CardProducto";
import Swal from "sweetalert2";

export default function Inicio() {
    const handleClick = () => {
        Swal.fire({
            icon: "info",
            title: "Bienvenido",
            text: "Esta es mi tienda virtual espero que te guste",
            timer: 2000,
            background: '#272727',
            color: '#c9c9c9',
            showConfirmButton: false,
            timerProgressBar: true,
        })
    }
    return (
        <PaginaLayaout>
            <h1 className="text-purple-500 text-4xl font-bold mb-6 text-center">Tienda Virtual</h1>
                <div className="flex justify-center mb-4">
                <button className="bg-purple-500 hover:bg-purple-800 text-white px-4 py-2 rounded cursor-pointer" onClick={handleClick}>Bienvenido</button>
                </div>    
                    <h1 className="text-purple-500 text-3xl font-bold mt-30 text-center">Algunos de nuestros Proveedores</h1>
            <section className="flex justify-center items-center mt-10 space-x-10">
                <CardProducto
                imgs={"https://placehold.co/200x200?text=Microsoft"}
                nombre={"Microsoft"}
                exp={"microsoft@gmail.com"}
                />
                <CardProducto
                imgs={"https://placehold.co/200x200?text=Samsung"}
                nombre={"Samsung"}
                exp={"samsung@gmail.com"}
                />
                <CardProducto 
                imgs={"https://placehold.co/200x200?text=Margarita"}
                nombre={"Margarita"}
                exp={"Margarita@gmail.com"}
                />
            </section>
        </PaginaLayaout>
    )
}