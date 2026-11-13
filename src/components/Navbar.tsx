import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

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

const EnlacePerfil = styled(Link)`
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export function Navbar() {
  return (
    <Barra>
      <Marca to="/">Biblioteca</Marca>
      <EnlacePerfil to="/perfil">Perfil</EnlacePerfil>
    </Barra>
  )
}
