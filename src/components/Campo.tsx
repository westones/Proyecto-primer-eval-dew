import styled from '@emotion/styled'

const Etiqueta = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.font.sizes.sm};
`

const Entrada = styled.input`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: ${({ theme }) => theme.font.sizes.md};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 1px;
  }
`

const Select = styled.select`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: ${({ theme }) => theme.font.sizes.md};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 1px;
  }
`

type Props = {
  etiqueta: string
  valor: string
  onChange: (valor: string) => void
  type?: 'text' | 'number'
  placeholder?: string
  opciones?: string[]
  disabled?: boolean
}

// Si recibe opciones se pinta un select; si no, un input normal.
export function Campo({
  etiqueta,
  valor,
  onChange,
  type = 'text',
  placeholder,
  opciones,
  disabled,
}: Props) {
  return (
    <Etiqueta>
      {etiqueta}
      {opciones ? (
        <Select
          value={valor}
          onChange={(event) => onChange(event.target.value)}
          disabled={disabled}
        >
          <option value="">Sin especificar</option>
          {opciones.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </Select>
      ) : (
        <Entrada
          type={type}
          value={valor}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
    </Etiqueta>
  )
}
