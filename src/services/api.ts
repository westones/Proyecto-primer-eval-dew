import type { ErrorApi } from '../types/api'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

export class ApiError extends Error {
  status: number

  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

export async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers)

  if (options.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json')
  }

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
    credentials: 'include',
  })

  const data = res.status === 204 ? null : await res.json().catch(() => null)

  if (!res.ok) {
    const fallo = data as ErrorApi | null
    // Cuando hay errores por campo, su mensaje se entiende mejor que el "msg" general
    const detalle = fallo?.errors?.map((error) => error.mensaje).join(' ')

    throw new ApiError(
      res.status,
      detalle || fallo?.msg || 'No se pudo conectar con el servidor',
    )
  }

  return data as T
}
