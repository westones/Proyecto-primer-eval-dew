import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Volver = styled(Link)`
  display: inline-block;
  margin-top: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
