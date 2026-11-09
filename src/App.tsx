import styled from '@emotion/styled'
import { MuestraTema } from './components/MuestraTema'

const Pagina = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.space.lg};
`

function App() {
  return (
    <Pagina>
      <MuestraTema />
    </Pagina>
  )
}

export default App
