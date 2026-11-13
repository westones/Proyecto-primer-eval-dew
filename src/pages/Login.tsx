import { useState, type FormEvent } from 'react'
import styled from '@emotion/styled'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Boton } from '../components/Boton'
import { useAuth } from '../hooks/useAuth'

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

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
  margin-top: ${({ theme }) => theme.space.lg};
`

const Campo = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.font.sizes.sm};
`

const Entrada = styled.input`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: ${({ theme }) => theme.font.sizes.md};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 1px;
  }
`

const MensajeError = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.font.sizes.sm};
`

export function Login() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [enviando, setEnviando] = useState(false)

  // Ruta que el usuario quiso abrir antes de que lo mandaran al login
  const destino = (location.state as { from?: string } | null)?.from ?? '/'

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email.trim() || !password) {
      setError('Completá el correo y la contraseña')
      return
    }

    setEnviando(true)
    setError(null)

    try {
      await login(email.trim(), password)
      navigate(destino, { replace: true })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo iniciar sesión')
    } finally {
      setEnviando(false)
    }
  }

  // Si ya hay sesión, el formulario no tiene nada que hacer
  if (user) {
    return <Navigate to={destino} replace />
  }

  return (
    <Pagina>
      <Tarjeta>
        <Titulo>Iniciar sesión</Titulo>
        <Texto>Entrá con el correo y la contraseña de tu cuenta.</Texto>
        <Formulario onSubmit={handleSubmit}>
          <Campo>
            Correo
            <Entrada
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              disabled={enviando}
            />
          </Campo>
          <Campo>
            Contraseña
            <Entrada
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              disabled={enviando}
            />
          </Campo>
          {error && <MensajeError role="alert">{error}</MensajeError>}
          <Boton type="submit" disabled={enviando}>
            {enviando ? 'Entrando...' : 'Entrar'}
          </Boton>
        </Formulario>
      </Tarjeta>
    </Pagina>
  )
}
