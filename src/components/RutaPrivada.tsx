import styled from '@emotion/styled'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Pantalla = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.muted};
  font-family: ${({ theme }) => theme.font.body};
`

export function RutaPrivada() {
  const { user, checking } = useAuth()
  const location = useLocation()

  // Mientras se pregunta por el perfil todavía no se sabe si hay sesión:
  // redirigir acá mandaría al login a un usuario que sí está logueado.
  if (checking) {
    return <Pantalla>Verificando la sesión...</Pantalla>
  }

  if (!user) {
    // Se guarda la ruta pedida para volver después del login
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}
