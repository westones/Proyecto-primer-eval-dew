import styled from '@emotion/styled'

// Título del listado a la izquierda y acciones a la derecha.
export const Cabecera = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.md};
`

export const Contador = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.font.sizes.sm};
`
