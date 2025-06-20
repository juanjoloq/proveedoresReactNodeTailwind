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
            showConfirmButton: false,
            timerProgressBar: true,
        })
    }
    return (
        <PaginaLayaout>
            <h1 className="text-purple-500 text-4xl font-bold mb-6 text-center">Tienda Virtual</h1>
                <button className="ml-212 bg-purple-500 hover:bg-purple-800 text-white p-2 rounded cursor-pointer" onClick={handleClick}>Bienvenido</button>
                    <h1 className="text-purple-500 text-3xl font-bold mt-30 text-center">Nuestros Produtos</h1>
            <section className="flex justify-center items-center mt-10 space-x-10">
                <CardProducto
                imgs={"https://placehold.co/200x200?text=Televisor"}
                nombre={"Televisor"}
                exp={"199.99"}
                />
                <CardProducto
                imgs={"https://placehold.co/200x200?text=Cables"}
                nombre={"Cables"}
                exp={"1.00"}
                />
                <CardProducto 
                imgs={"https://placehold.co/200x200?text=Celular"}
                nombre={"Celular"}
                exp={"500"}
                />
            </section>
        </PaginaLayaout>
    )
}