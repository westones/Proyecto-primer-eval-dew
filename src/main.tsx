import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Global, ThemeProvider } from '@emotion/react'
import App from './App.tsx'
import { estilosGlobales } from './styles/global'
import { theme } from './styles/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={estilosGlobales} />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
