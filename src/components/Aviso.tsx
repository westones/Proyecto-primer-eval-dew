import styled from '@emotion/styled'

// El error de una petición se muestra como viene del backend, en texto claro.
export const Aviso = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.danger};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.danger};
  line-height: 1.5;
`
