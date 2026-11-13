import { createContext } from 'react'
import type { AuthContextValue } from '../types/auth'

// El contexto se crea aparte del proveedor para no romper el hot reload
export const AuthContext = createContext<AuthContextValue | null>(null)
