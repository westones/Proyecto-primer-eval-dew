import styled from '@emotion/styled'

// Casilla con su etiqueta, para los campos de sí/no.
export const Casilla = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.font.sizes.sm};
`
