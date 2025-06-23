import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Proveedores from './Pages/Proveedores';
import Contacto from './Pages/Contacto';
import ProveedorFormulario from './Pages/ProveedorFormulario';

function App() {


  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<Inicio />}></Route>
              <Route path="/proveedores" element={<Proveedores />}></Route>
              <Route path="/contacto" element={<Contacto />}></Route>
              <Route path="/proveedores/formulario" element={<ProveedorFormulario />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
