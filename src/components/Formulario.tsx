import styled from '@emotion/styled'

// El marco común de los formularios: tarjeta, ancho y separación entre campos.
export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
  max-width: 520px;
  margin-top: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`
