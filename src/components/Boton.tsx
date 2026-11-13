import styled from '@emotion/styled'

export const Boton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  font-family: inherit;
  font-size: ${({ theme }) => theme.font.sizes.md};
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`
