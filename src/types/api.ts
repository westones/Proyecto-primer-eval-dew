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

// Lo que manda el formulario cuando se crea o se modifica un libro
export interface DatosLibro {
  titulo: string
  autor: string
  isbn?: string
  genero?: string
  anioPublicacion?: number
  paginas?: number
  disponible: boolean
}

// Los mismos géneros que valida el backend
export const GENEROS = [
  'novela',
  'ensayo',
  'poesía',
  'teatro',
  'infantil',
  'ciencia ficción',
  'fantasía',
  'historia',
]

export type TipoSocio = 'estudiante' | 'profesor' | 'general'

export interface Socio {
  _id: string
  nombre: string
  apellidos?: string
  email: string
  telefono?: string
  fechaNacimiento?: string
  tipo: TipoSocio
  activo: boolean
  codigoSocio?: string
  createdAt: string
  updatedAt: string
}

// Lo que manda el formulario cuando se crea o se modifica un socio
export interface DatosSocio {
  nombre: string
  apellidos?: string
  email: string
  telefono?: string
  fechaNacimiento?: string
  tipo: TipoSocio
  activo: boolean
}

// Los mismos tipos que valida el backend
export const TIPOS_SOCIO = ['estudiante', 'profesor', 'general']

export interface Usuario {
  _id: string
  username: string
  email: string
  role: 'user' | 'admin'
  activo: boolean
  createdAt: string
  updatedAt: string
}

// Forma en que el backend cuenta lo que falló
export interface ErrorApi {
  msg?: string
  errors?: { campo: string; mensaje: string }[]
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
