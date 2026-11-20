import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

// Mismo aspecto que Boton, pero navegando con el router.
export const EnlaceBoton = styled(Link)`
  display: inline-block;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  font-size: ${({ theme }) => theme.font.sizes.md};
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`
