import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const Menu = styled.aside`
  position: sticky;
  top: 0;
  align-self: flex-start;
  width: 220px;
  height: 100vh;
  padding: ${({ theme }) => theme.space.lg};
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.surface};
`

const Etiqueta = styled.p`
  margin: 0 0 ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.6;
`

const Lista = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
`

const Enlace = styled(NavLink)`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.surface};
  font-size: ${({ theme }) => theme.font.sizes.md};
  text-decoration: none;
  opacity: 0.72;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    opacity: 1;
  }

  &.active {
    background: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }
`

export function Sidebar() {
  return (
    <Menu>
      <Etiqueta>Menú</Etiqueta>
      <Lista>
        <Enlace to="/" end>
          Inicio
        </Enlace>
        <Enlace to="/libros">Libros</Enlace>
        <Enlace to="/socios">Socios</Enlace>
        <Enlace to="/perfil">Perfil</Enlace>
      </Lista>
    </Menu>
  )
}
