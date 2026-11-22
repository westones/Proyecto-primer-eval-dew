import styled from '@emotion/styled'

// Sí/No de una columna: en color si está activo, en gris si no.
export const Estado = styled.span<{ $si: boolean }>`
  color: ${({ theme, $si }) => ($si ? theme.colors.primary : theme.colors.muted)};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-weight: 600;
`
