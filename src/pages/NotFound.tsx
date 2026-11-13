import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Pagina = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.space.lg};
  text-align: center;
`

const Codigo = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.font.heading};
  font-size: ${({ theme }) => theme.font.sizes.xxl};
  color: ${({ theme }) => theme.colors.primary};
`

const Titulo = styled.h1`
  margin: ${({ theme }) => `${theme.space.xs} 0 ${theme.space.sm}`};
  font-size: ${({ theme }) => theme.font.sizes.lg};
`

const Texto = styled.p`
  margin: 0 0 ${({ theme }) => theme.space.lg};
  color: ${({ theme }) => theme.colors.muted};
`

const Enlace = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`

export function NotFound() {
  return (
    <Pagina>
      <div>
        <Codigo>404</Codigo>
        <Titulo>Página no encontrada</Titulo>
        <Texto>La dirección que buscás no existe o cambió de lugar.</Texto>
        <Enlace to="/">Volver al inicio</Enlace>
      </div>
    </Pagina>
  )
}
