import styled from '@emotion/styled'
import { Boton } from './Boton'

const Tarjeta = styled.section`
  width: 100%;
  max-width: 420px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.space.xl};
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
  font-size: ${({ theme }) => theme.font.sizes.md};
  line-height: 1.6;
`

const Paleta = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
  margin: ${({ theme }) => theme.space.lg} 0;
  padding: 0;
  list-style: none;
`

const Color = styled.li<{ color: string }>`
  width: 32px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  background: ${({ color }) => color};
`

// Tarjeta temporal para ver el tema aplicado antes de armar las páginas
export function MuestraTema() {
  return (
    <Tarjeta>
      <Titulo>Biblioteca</Titulo>
      <Texto>
        Tema base del proyecto: colores, espacios y tipografía. Esto se reemplaza por el panel
        cuando esté el router.
      </Texto>
      <Paleta>
        <Color color="#2a6857" />
        <Color color="#f6f3ec" />
        <Color color="#1d1b18" />
        <Color color="#b23a2f" />
      </Paleta>
      <Boton>Ver préstamos</Boton>
    </Tarjeta>
  )
}
