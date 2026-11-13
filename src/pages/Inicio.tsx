import styled from '@emotion/styled'
import { TituloPagina } from '../components/TituloPagina'

const Texto = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
`

export function Inicio() {
  return (
    <section>
      <TituloPagina>Panel de inicio</TituloPagina>
      <Texto>Bienvenido a la biblioteca. Desde el menú se entra a libros y socios.</Texto>
    </section>
  )
}
