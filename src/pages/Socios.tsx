import styled from '@emotion/styled'
import { TituloPagina } from '../components/TituloPagina'

const Texto = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
`

export function Socios() {
  return (
    <section>
      <TituloPagina>Socios</TituloPagina>
      <Texto>El listado de socios se conecta con la API en los próximos pasos.</Texto>
    </section>
  )
}
