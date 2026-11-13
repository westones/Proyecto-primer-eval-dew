import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

const Contenedor = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bg};
`

const Columna = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`

const Contenido = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.space.xl};
`

export function LayoutPrivado() {
  return (
    <Contenedor>
      <Sidebar />
      <Columna>
        <Navbar />
        <Contenido>
          <Outlet />
        </Contenido>
      </Columna>
    </Contenedor>
  )
}
