import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormularioLibro } from '../components/FormularioLibro'
import { Texto } from '../components/Texto'
import { TituloPagina } from '../components/TituloPagina'
import { Volver } from '../components/Volver'
import { crearLibro } from '../services/libros'
import type { DatosLibro } from '../types/api'

export function LibroNuevo() {
  const navigate = useNavigate()
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const guardar = async (datos: DatosLibro) => {
    setEnviando(true)
    setError(null)

    try {
      await crearLibro(datos)
      navigate('/libros')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo guardar el libro')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section>
      <TituloPagina>Nuevo libro</TituloPagina>
      <Texto>Completá los datos. Solo el título y el autor son obligatorios.</Texto>
      <FormularioLibro
        enviando={enviando}
        error={error}
        textoBoton="Guardar libro"
        onGuardar={guardar}
      />
      <Volver to="/libros">Volver al listado</Volver>
    </section>
  )
}
