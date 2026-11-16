import styled from '@emotion/styled'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Avatar } from './Avatar'

const Barra = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const Marca = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
`

const Logo = styled.span`
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.surface};
  font-family: ${({ theme }) => theme.font.heading};
  font-size: ${({ theme }) => theme.font.sizes.lg};
  line-height: 1;
`

const NombreMarca = styled.span`
  font-family: ${({ theme }) => theme.font.heading};
  font-size: ${({ theme }) => theme.font.sizes.lg};
  font-weight: 600;
`

const Acciones = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
`

const Usuario = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.bg};
  }
`

const NombreUsuario = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-weight: 500;
`

const Salir = styled.button`
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.md}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: ${({ theme }) => theme.font.sizes.sm};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.danger};
  }
`

export function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login', { replace: true })
  }

  return (
    <Barra>
      <Marca to="/">
        <Logo aria-hidden="true">B</Logo>
        <NombreMarca>Biblioteca</NombreMarca>
      </Marca>
      <Acciones>
        {user && (
          <Usuario to="/perfil" title="Ver perfil">
            <Avatar nombre={user.username} tamano="sm" />
            <NombreUsuario>{user.username}</NombreUsuario>
          </Usuario>
        )}
        <Salir type="button" onClick={handleLogout}>
          Salir
        </Salir>
      </Acciones>
    </Barra>
  )
}
