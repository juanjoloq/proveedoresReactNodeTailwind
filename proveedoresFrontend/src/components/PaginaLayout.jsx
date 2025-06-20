import React from "react";
import NavegacionPag from "./PaginaComponents/Navegacion";

export default function PaginaLayaout({ children}) {
    return (  
        <>
        <NavegacionPag />
        <section className="px-6 md:px-10 py-8">
            {children}
        </section>   
        </>
    )    
}