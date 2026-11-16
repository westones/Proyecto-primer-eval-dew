import styled from '@emotion/styled'
import { TituloPagina } from '../components/TituloPagina'
import { useGet } from '../hooks/useGet'
import type { Libro, Listado } from '../types/api'

const Texto = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
`

const Aviso = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.danger};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.danger};
`

const Tabla = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`

const Th = styled.th`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  background: ${({ theme }) => theme.colors.bg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-weight: 600;
  letter-spacing: 0.04em;
  text-align: left;
  text-transform: uppercase;
`

const Td = styled.td`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.font.sizes.md};

  tr:last-child & {
    border-bottom: none;
  }
`

const Disponible = styled.span<{ $si: boolean }>`
  color: ${({ theme, $si }) => ($si ? theme.colors.primary : theme.colors.muted)};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-weight: 600;
`

export function Libros() {
  const { data, loading, error } = useGet<Listado<Libro>>('/libros')
  const libros = data?.data ?? []

  return (
    <section>
      <TituloPagina>Libros</TituloPagina>

      {loading && <Texto>Cargando libros…</Texto>}
      {error && <Aviso>No se pudieron cargar los libros: {error}</Aviso>}

      {!loading && !error && (
        <Tabla>
          <thead>
            <tr>
              <Th>Título</Th>
              <Th>Autor</Th>
              <Th>Año</Th>
              <Th>Disponible</Th>
            </tr>
          </thead>
          <tbody>
            {libros.map((libro) => (
              <tr key={libro._id}>
                <Td>{libro.titulo}</Td>
                <Td>{libro.autor}</Td>
                <Td>{libro.anioPublicacion ?? '—'}</Td>
                <Td>
                  <Disponible $si={libro.disponible}>
                    {libro.disponible ? 'Sí' : 'No'}
                  </Disponible>
                </Td>
              </tr>
            ))}
          </tbody>
        </Tabla>
      )}
    </section>
  )
}
