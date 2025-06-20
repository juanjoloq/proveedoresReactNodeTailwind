import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';

function App() {


  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<Inicio />}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
