import { useEffect, useState } from 'react'
import { apiFetch } from '../services/api'

// Carga una ruta de la API y avisa si está cargando o si falló.
// Si la ruta cambia o el componente se desmonta, se cancela la petición vieja.
export function useGet<T>(path: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    // Al cambiar la ruta hay que volver a "cargando" y borrar el error viejo.
    // Es a propósito, aunque la regla del compilador de React no lo prefiera.
    /* oxlint-disable react/set-state-in-effect */
    setLoading(true)
    setError(null)
    /* oxlint-enable react/set-state-in-effect */

    apiFetch<T>(path, { signal: controller.signal })
      .then(setData)
      .catch((err) => {
        if (err instanceof Error && err.name === 'AbortError') return
        setError(err instanceof Error ? err.message : 'Error inesperado')
      })
      .finally(() => {
        // La petición vieja no tiene que apagar el loading de la nueva
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [path])

  return { data, loading, error }
}
