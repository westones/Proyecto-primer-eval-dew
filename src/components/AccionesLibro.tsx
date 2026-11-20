import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import type { Libro } from '../types/api'

const Acciones = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
`

const EnlaceAccion = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const BotonEliminar = styled.button`
  border: none;
  padding: 0;
  background: none;
  color: ${({ theme }) => theme.colors.danger};
  font-family: inherit;
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-weight: 600;
  cursor: pointer;

  &:hover:not(:disabled) {
    text-decoration: underline;
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`

type Props = {
  libro: Libro
  borrando: boolean
  onEliminar: (libro: Libro) => void
}

export function AccionesLibro({ libro, borrando, onEliminar }: Props) {
  return (
    <Acciones>
      <EnlaceAccion to={`/libros/${libro._id}/editar`}>Editar</EnlaceAccion>
      <BotonEliminar type="button" onClick={() => onEliminar(libro)} disabled={borrando}>
        {borrando ? 'Eliminando…' : 'Eliminar'}
      </BotonEliminar>
    </Acciones>
  )
}
