export interface AppTheme {
  colors: {
    bg: string
    surface: string
    text: string
    muted: string
    border: string
    primary: string
    primaryDark: string
    danger: string
  }
  space: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    xxl: string
  }
  radius: {
    sm: string
    md: string
    lg: string
  }
  font: {
    body: string
    heading: string
    sizes: {
      sm: string
      md: string
      lg: string
      xl: string
      xxl: string
    }
  }
}

export const theme: AppTheme = {
  colors: {
    bg: '#f6f3ec',
    surface: '#ffffff',
    text: '#1d1b18',
    muted: '#6f6862',
    border: '#e3ddd2',
    primary: '#2a6857',
    primaryDark: '#1f4f42',
    danger: '#b23a2f',
  },
  space: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '40px',
    xxl: '64px',
  },
  radius: {
    sm: '6px',
    md: '12px',
    lg: '20px',
  },
  font: {
    body: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    heading: "Georgia, 'Iowan Old Style', 'Times New Roman', serif",
    sizes: {
      sm: '14px',
      md: '16px',
      lg: '20px',
      xl: '28px',
      xxl: '40px',
    },
  },
}
