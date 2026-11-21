import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Aviso } from '../components/Aviso'
import { FormularioLibro } from '../components/FormularioLibro'
import { Texto } from '../components/Texto'
import { TituloPagina } from '../components/TituloPagina'
import { Volver } from '../components/Volver'
import { useGet } from '../hooks/useGet'
import { actualizarLibro } from '../services/libros'
import type { DatosLibro, Libro } from '../types/api'

export function LibroEditar() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: libro, loading, error: errorCarga } = useGet<Libro>(`/libros/${id}`)
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const guardar = async (datos: DatosLibro) => {
    if (!id) return

    setEnviando(true)
    setError(null)

    try {
      await actualizarLibro(id, datos)
      navigate('/libros')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo guardar el libro')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section>
      <TituloPagina>Editar libro</TituloPagina>

      {loading && <Texto>Cargando libro…</Texto>}
      {errorCarga && <Aviso>No se pudo cargar el libro: {errorCarga}</Aviso>}

      {libro && (
        <>
          <Texto>Corregí lo que haga falta y guardá los cambios.</Texto>
          <FormularioLibro
            inicial={libro}
            enviando={enviando}
            error={error}
            textoBoton="Guardar cambios"
            onGuardar={guardar}
          />
        </>
      )}

      <Volver to="/libros">Volver al listado</Volver>
    </section>
  )
}
