import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Global, ThemeProvider } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { AuthProvider } from './context/AuthProvider.tsx'
import { estilosGlobales } from './styles/global'
import { theme } from './styles/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={estilosGlobales} />
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
