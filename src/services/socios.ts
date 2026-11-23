import { apiFetch } from './api'
import type { DatosSocio, Socio } from '../types/api'

export function crearSocio(datos: DatosSocio) {
  return apiFetch<{ msg: string; socio: Socio }>('/socios', {
    method: 'POST',
    body: JSON.stringify(datos),
  })
}
