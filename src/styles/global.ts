import { css } from '@emotion/react'
import type { AppTheme } from './theme'

export const estilosGlobales = (theme: AppTheme) => css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${theme.colors.bg};
    color: ${theme.colors.text};
    font-family: ${theme.font.body};
    -webkit-font-smoothing: antialiased;
  }
`
