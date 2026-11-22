import { useState } from 'react'
import { AccionesLibro } from '../components/AccionesLibro'
import { Aviso } from '../components/Aviso'
import { Cabecera, Contador } from '../components/CabeceraListado'
import { EnlaceBoton } from '../components/EnlaceBoton'
import { Estado } from '../components/Estado'
import { Tabla, Td, Th } from '../components/Tabla'
import { Texto } from '../components/Texto'
import { TituloPagina } from '../components/TituloPagina'
import { Vacio } from '../components/Vacio'
import { useGet } from '../hooks/useGet'
import { eliminarLibro } from '../services/libros'
import type { Libro, Listado } from '../types/api'

export function Libros() {
  const { data, loading, error, recargar } = useGet<Listado<Libro>>('/libros')
  const [borrando, setBorrando] = useState<string | null>(null)
  const [errorBorrado, setErrorBorrado] = useState<string | null>(null)
  const libros = data?.data ?? []
  const total = data?.meta.total ?? 0

  const handleEliminar = async (libro: Libro) => {
    // Borrar no se deshace, así que se pregunta antes
    if (!window.confirm(`¿Eliminar «${libro.titulo}»?`)) return

    setBorrando(libro._id)
    setErrorBorrado(null)

    try {
      await eliminarLibro(libro._id)
      recargar()
    } catch (err) {
      setErrorBorrado(err instanceof Error ? err.message : 'No se pudo eliminar el libro')
    } finally {
      setBorrando(null)
    }
  }

  return (
    <section>
      <Cabecera>
        <div>
          <TituloPagina>Libros</TituloPagina>
          {!loading && !error && libros.length > 0 && (
            <Contador>
              Mostrando {libros.length} de {total} {total === 1 ? 'libro' : 'libros'}
            </Contador>
          )}
        </div>
        <EnlaceBoton to="/libros/nuevo">Nuevo libro</EnlaceBoton>
      </Cabecera>

      {loading && <Texto>Cargando libros…</Texto>}
      {error && <Aviso>No se pudieron cargar los libros: {error}</Aviso>}
      {errorBorrado && <Aviso role="alert">{errorBorrado}</Aviso>}

      {!loading && !error && libros.length === 0 && (
        <Vacio>No hay libros cargados todavía.</Vacio>
      )}

      {!loading && !error && libros.length > 0 && (
        <Tabla>
          <thead>
            <tr>
              <Th>Título</Th>
              <Th>Autor</Th>
              <Th>Año</Th>
              <Th>Disponible</Th>
              <Th>Acciones</Th>
            </tr>
          </thead>
          <tbody>
            {libros.map((libro) => (
              <tr key={libro._id}>
                <Td>{libro.titulo}</Td>
                <Td>{libro.autor}</Td>
                <Td>{libro.anioPublicacion ?? '—'}</Td>
                <Td>
                  <Estado $si={libro.disponible}>
                    {libro.disponible ? 'Sí' : 'No'}
                  </Estado>
                </Td>
                <Td>
                  <AccionesLibro
                    libro={libro}
                    borrando={borrando === libro._id}
                    onEliminar={handleEliminar}
                  />
                </Td>
              </tr>
            ))}
          </tbody>
        </Tabla>
      )}
    </section>
  )
}
