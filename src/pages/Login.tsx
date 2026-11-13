import styled from '@emotion/styled'

const Pagina = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.space.lg};
`

const Tarjeta = styled.section`
  width: 100%;
  max-width: 400px;
  padding: ${({ theme }) => theme.space.xl};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
`

const Titulo = styled.h1`
  margin: 0 0 ${({ theme }) => theme.space.sm};
  font-family: ${({ theme }) => theme.font.heading};
  font-size: ${({ theme }) => theme.font.sizes.xxl};
  font-weight: 600;
`

const Texto = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
`

export function Login() {
  return (
    <Pagina>
      <Tarjeta>
        <Titulo>Iniciar sesión</Titulo>
        <Texto>El acceso con correo y contraseña se conecta con el servidor en el próximo paso.</Texto>
      </Tarjeta>
    </Pagina>
  )
}
