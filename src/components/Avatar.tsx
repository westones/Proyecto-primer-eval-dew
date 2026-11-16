import styled from '@emotion/styled'

const tamanos = {
  sm: { lado: '32px', fuente: '13px' },
  md: { lado: '44px', fuente: '16px' },
  lg: { lado: '88px', fuente: '30px' },
} as const

export type AvatarTamano = keyof typeof tamanos

// Toma la parte local del correo y separa por puntos, guiones y espacios:
// "alumno" queda "AL" y "ana.perez" queda "AP".
const iniciales = (nombre: string) => {
  const partes = nombre
    .trim()
    .split('@')[0]
    .split(/[\s._-]+/)
    .filter(Boolean)

  if (partes.length === 0) return '?'
  if (partes.length === 1) return partes[0].slice(0, 2).toUpperCase()
  return `${partes[0][0]}${partes[1][0]}`.toUpperCase()
}

const Circulo = styled.span<{ $tamano: AvatarTamano }>`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${({ $tamano }) => tamanos[$tamano].lado};
  height: ${({ $tamano }) => tamanos[$tamano].lado};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  font-family: ${({ theme }) => theme.font.heading};
  font-size: ${({ $tamano }) => tamanos[$tamano].fuente};
  font-weight: 600;
  letter-spacing: 0.02em;
  user-select: none;
`

interface AvatarProps {
  nombre: string
  tamano?: AvatarTamano
}

// Por defecto no hay foto: el avatar son las iniciales del usuario
export function Avatar({ nombre, tamano = 'md' }: AvatarProps) {
  return (
    <Circulo $tamano={tamano} aria-hidden="true">
      {iniciales(nombre)}
    </Circulo>
  )
}
