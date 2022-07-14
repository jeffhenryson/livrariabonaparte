import React from 'react'
import { Routes, Route } from 'react-router-dom'

function Admin() {
  return (
    <Routes>
      <Route path="/*" element={<h1>admin</h1>} />
      <Route path="/livros*" element={<h1>livros</h1>} />
      <Route path="/categorias*" element={<h1>categorias</h1>} />
      <Route path="/autores*" element={<h1>autores</h1>} />
    </Routes>
  )
}

export default Admin