export interface Libro {
  _id: string
  titulo: string
  autor: string
  isbn?: string
  genero?: string
  anioPublicacion?: number
  paginas?: number
  disponible: boolean
  fechaAlta: string
  createdAt: string
  updatedAt: string
}

export interface Socio {
  _id: string
  nombre: string
  apellidos?: string
  email: string
  telefono?: string
  fechaNacimiento?: string
  tipo: 'estudiante' | 'profesor' | 'general'
  activo: boolean
  codigoSocio?: string
  createdAt: string
  updatedAt: string
}

export interface Usuario {
  _id: string
  username: string
  email: string
  role: 'user' | 'admin'
  activo: boolean
  createdAt: string
  updatedAt: string
}

export interface Paginacion {
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
    hasPrev: boolean
    hasNext: boolean
  }
  links: {
    self: string
    first: string
    prev: string | null
    next: string | null
    last: string
  }
}

export type Listado<T> = Paginacion & { data: T[] }
