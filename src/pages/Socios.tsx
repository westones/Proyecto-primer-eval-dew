import styled from '@emotion/styled'
import { Aviso } from '../components/Aviso'
import { Cabecera, Contador } from '../components/CabeceraListado'
import { EnlaceBoton } from '../components/EnlaceBoton'
import { Estado } from '../components/Estado'
import { Tabla, Td, Th } from '../components/Tabla'
import { Texto } from '../components/Texto'
import { TituloPagina } from '../components/TituloPagina'
import { Vacio } from '../components/Vacio'
import { useGet } from '../hooks/useGet'
import type { Listado, Socio } from '../types/api'

// El backend guarda el tipo en minúsculas; en pantalla queda mejor capitalizado
const Tipo = styled.span`
  text-transform: capitalize;
`

export function Socios() {
  const { data, loading, error } = useGet<Listado<Socio>>('/socios')
  const socios = data?.data ?? []
  const total = data?.meta.total ?? 0

  return (
    <section>
      <Cabecera>
        <div>
          <TituloPagina>Socios</TituloPagina>
          {!loading && !error && socios.length > 0 && (
            <Contador>
              Mostrando {socios.length} de {total} {total === 1 ? 'socio' : 'socios'}
            </Contador>
          )}
        </div>
        <EnlaceBoton to="/socios/nuevo">Nuevo socio</EnlaceBoton>
      </Cabecera>

      {loading && <Texto>Cargando socios…</Texto>}
      {error && <Aviso>No se pudieron cargar los socios: {error}</Aviso>}

      {!loading && !error && socios.length === 0 && (
        <Vacio>No hay socios cargados todavía.</Vacio>
      )}

      {!loading && !error && socios.length > 0 && (
        <Tabla>
          <thead>
            <tr>
              <Th>Nombre</Th>
              <Th>Apellidos</Th>
              <Th>Correo</Th>
              <Th>Tipo</Th>
              <Th>Activo</Th>
            </tr>
          </thead>
          <tbody>
            {socios.map((socio) => (
              <tr key={socio._id}>
                <Td>{socio.nombre}</Td>
                <Td>{socio.apellidos ?? '—'}</Td>
                <Td>{socio.email}</Td>
                <Td>
                  <Tipo>{socio.tipo}</Tipo>
                </Td>
                <Td>
                  <Estado $si={socio.activo}>{socio.activo ? 'Sí' : 'No'}</Estado>
                </Td>
              </tr>
            ))}
          </tbody>
        </Tabla>
      )}
    </section>
  )
}
