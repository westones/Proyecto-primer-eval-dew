import styled from '@emotion/styled'

export const TituloPagina = styled.h1`
  margin: 0 0 ${({ theme }) => theme.space.sm};
  font-family: ${({ theme }) => theme.font.heading};
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-weight: 600;
`
