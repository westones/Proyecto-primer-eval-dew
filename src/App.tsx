import { Route, Routes } from 'react-router-dom'
import { LayoutPrivado } from './components/LayoutPrivado'
import { RutaPrivada } from './components/RutaPrivada'
import { Inicio } from './pages/Inicio'
import { LibroEditar } from './pages/LibroEditar'
import { LibroNuevo } from './pages/LibroNuevo'
import { Libros } from './pages/Libros'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { Perfil } from './pages/Perfil'
import { SocioNuevo } from './pages/SocioNuevo'
import { Socios } from './pages/Socios'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<RutaPrivada />}>
        <Route element={<LayoutPrivado />}>
          <Route index element={<Inicio />} />
          <Route path="libros" element={<Libros />} />
          <Route path="libros/nuevo" element={<LibroNuevo />} />
          <Route path="libros/:id/editar" element={<LibroEditar />} />
          <Route path="socios" element={<Socios />} />
          <Route path="socios/nuevo" element={<SocioNuevo />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
