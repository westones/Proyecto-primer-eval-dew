import { apiFetch } from './api'
import type { DatosLibro, Libro } from '../types/api'

export function crearLibro(datos: DatosLibro) {
  return apiFetch<{ msg: string; libro: Libro }>('/libros', {
    method: 'POST',
    body: JSON.stringify(datos),
  })
}

export function actualizarLibro(id: string, datos: DatosLibro) {
  // El backend espera el id dentro del cuerpo, no en la URL
  return apiFetch<{ msg: string; libro: Libro }>('/libros', {
    method: 'PUT',
    body: JSON.stringify({ id, ...datos }),
  })
}

export function eliminarLibro(id: string) {
  return apiFetch<null>(`/libros/${id}`, { method: 'DELETE' })
}
