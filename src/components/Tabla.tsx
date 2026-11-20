import styled from '@emotion/styled'

export const Tabla = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`

export const Th = styled.th`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  background: ${({ theme }) => theme.colors.bg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-weight: 600;
  letter-spacing: 0.04em;
  text-align: left;
  text-transform: uppercase;
`

export const Td = styled.td`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.font.sizes.md};

  tr:last-child & {
    border-bottom: none;
  }
`
