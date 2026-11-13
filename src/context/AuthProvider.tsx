import { useEffect, useState, type ReactNode } from 'react'
import { apiFetch } from '../services/api'
import type { Usuario } from '../types/api'
import { AuthContext } from './AuthContext'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Usuario | null>(null)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    apiFetch<{ user: Usuario }>('/api/auth/profile')
      .then((data) => setUser(data.user))
      .catch(() => setUser(null))
      .finally(() => setChecking(false))
  }, [])

  const login = async (email: string, password: string) => {
    const data = await apiFetch<{ user: Usuario }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })

    setUser(data.user)
  }

  const logout = async () => {
    // Si el logout del servidor falla, la sesión local se cierra igual
    await apiFetch('/api/auth/logout', { method: 'POST' }).catch(() => undefined)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, checking, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
