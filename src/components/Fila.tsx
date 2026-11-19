import styled from '@emotion/styled'

// Campos que comparten fila y se reparten el ancho. El min-width deja que se achiquen.
export const Fila = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};

  > * {
    flex: 1;
    min-width: 0;
  }
`
