import styled from '@emotion/styled'
import { Avatar } from '../components/Avatar'
import { TituloPagina } from '../components/TituloPagina'
import { useAuth } from '../hooks/useAuth'

const Tarjeta = styled.article`
  max-width: 640px;
  padding: ${({ theme }) => theme.space.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`

const Cabecera = styled.header`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  padding-bottom: ${({ theme }) => theme.space.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const Identidad = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
  min-width: 0;
`

const Nombre = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.font.heading};
  font-size: ${({ theme }) => theme.font.sizes.lg};
  font-weight: 600;
`

const Correo = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  overflow-wrap: anywhere;
`

const Rol = styled.span`
  align-self: flex-start;
  margin-top: ${({ theme }) => theme.space.xs};
  padding: 2px ${({ theme }) => theme.space.sm};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.sizes.sm};
`

const Datos = styled.dl`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  margin: ${({ theme }) => theme.space.lg} 0 0;
`

const Termino = styled.dt`
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.font.sizes.sm};
`

const Valor = styled.dd`
  margin: 0;
  font-size: ${({ theme }) => theme.font.sizes.md};
`

const Texto = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
`

const roles = {
  admin: 'Administrador',
  user: 'Usuario',
} as const

const formatearFecha = (iso: string) =>
  new Date(iso).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

export function Perfil() {
  const { user } = useAuth()

  if (!user) {
    return (
      <section>
        <TituloPagina>Perfil</TituloPagina>
        <Texto>No hay una sesión activa.</Texto>
      </section>
    )
  }

  return (
    <section>
      <TituloPagina>Perfil</TituloPagina>
      <Tarjeta>
        <Cabecera>
          <Avatar nombre={user.username} tamano="lg" />
          <Identidad>
            <Nombre>{user.username}</Nombre>
            <Correo>{user.email}</Correo>
            <Rol>{roles[user.role]}</Rol>
          </Identidad>
        </Cabecera>
        <Datos>
          <Termino>Usuario</Termino>
          <Valor>{user.username}</Valor>
          <Termino>Correo</Termino>
          <Valor>{user.email}</Valor>
          <Termino>Rol</Termino>
          <Valor>{roles[user.role]}</Valor>
          <Termino>Estado</Termino>
          <Valor>{user.activo ? 'Activa' : 'Inactiva'}</Valor>
          <Termino>Alta</Termino>
          <Valor>{formatearFecha(user.createdAt)}</Valor>
        </Datos>
      </Tarjeta>
    </section>
  )
}
