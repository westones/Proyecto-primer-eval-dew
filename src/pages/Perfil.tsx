import styled from '@emotion/styled'
import { TituloPagina } from '../components/TituloPagina'

const Texto = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
`

export function Perfil() {
  return (
    <section>
      <TituloPagina>Perfil</TituloPagina>
      <Texto>Acá se muestran los datos del usuario cuando esté la sesión.</Texto>
    </section>
  )
}
