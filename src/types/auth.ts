import type { Usuario } from './api'

export interface AuthContextValue {
  user: Usuario | null
  checking: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}
