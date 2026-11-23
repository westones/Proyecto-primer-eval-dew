import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormularioSocio } from '../components/FormularioSocio'
import { Texto } from '../components/Texto'
import { TituloPagina } from '../components/TituloPagina'
import { Volver } from '../components/Volver'
import { crearSocio } from '../services/socios'
import type { DatosSocio } from '../types/api'

export function SocioNuevo() {
  const navigate = useNavigate()
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const guardar = async (datos: DatosSocio) => {
    setEnviando(true)
    setError(null)

    try {
      await crearSocio(datos)
      navigate('/socios')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo guardar el socio')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section>
      <TituloPagina>Nuevo socio</TituloPagina>
      <Texto>Completá los datos. El nombre y el correo son obligatorios.</Texto>
      <FormularioSocio
        enviando={enviando}
        error={error}
        textoBoton="Guardar socio"
        onGuardar={guardar}
      />
      <Volver to="/socios">Volver al listado</Volver>
    </section>
  )
}
