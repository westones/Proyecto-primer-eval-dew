import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const Menu = styled.aside`
  position: sticky;
  top: 0;
  flex-shrink: 0;
  align-self: flex-start;
  width: 220px;
  height: 100vh;
  padding: ${({ theme }) => theme.space.lg};
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.surface};
`

const Grupo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};

  & + & {
    margin-top: ${({ theme }) => theme.space.lg};
  }
`

const Etiqueta = styled.p`
  margin: 0 0 ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.6;
`

const Enlace = styled(NavLink)`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  border-left: 3px solid transparent;
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.surface};
  font-size: ${({ theme }) => theme.font.sizes.md};
  text-decoration: none;
  opacity: 0.72;
  transition: background 0.15s ease, opacity 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    opacity: 1;
  }

  &.active {
    border-left-color: ${({ theme }) => theme.colors.surface};
    background: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    opacity: 1;
  }
`

export function Sidebar() {
  return (
    <Menu>
      <Grupo>
        <Etiqueta>Menú</Etiqueta>
        <Enlace to="/" end>
          Inicio
        </Enlace>
        <Enlace to="/libros">Libros</Enlace>
        <Enlace to="/socios">Socios</Enlace>
      </Grupo>
      <Grupo>
        <Etiqueta>Cuenta</Etiqueta>
        <Enlace to="/perfil">Perfil</Enlace>
      </Grupo>
    </Menu>
  )
}
