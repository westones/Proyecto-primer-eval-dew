import styled from '@emotion/styled'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

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
  font-family: ${({ theme }) => theme.font.heading};
  font-size: ${({ theme }) => theme.font.sizes.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
`

const Acciones = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
`

const EnlacePerfil = styled(Link)`
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Saludar = styled.span`
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.font.sizes.sm};
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
      <Marca to="/">Biblioteca</Marca>
      <Acciones>
        {user && <Saludar>{user.username}</Saludar>}
        <EnlacePerfil to="/perfil">Perfil</EnlacePerfil>
        <Salir type="button" onClick={handleLogout}>
          Salir
        </Salir>
      </Acciones>
    </Barra>
  )
}
