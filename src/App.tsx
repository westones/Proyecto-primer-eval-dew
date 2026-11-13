import { Route, Routes } from 'react-router-dom'
import { Inicio } from './pages/Inicio'
import { Libros } from './pages/Libros'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { Perfil } from './pages/Perfil'
import { Socios } from './pages/Socios'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/libros" element={<Libros />} />
      <Route path="/socios" element={<Socios />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
