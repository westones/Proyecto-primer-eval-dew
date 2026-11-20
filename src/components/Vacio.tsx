import styled from '@emotion/styled'

export const Vacio = styled.p`
  margin: 0;
  padding: ${({ theme }) => `${theme.space.xl} ${theme.space.md}`};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
`
