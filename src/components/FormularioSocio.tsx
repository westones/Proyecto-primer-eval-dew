import { useState, type FormEvent } from 'react'
import { Aviso } from './Aviso'
import { Boton } from './Boton'
import { Campo } from './Campo'
import { Casilla } from './Casilla'
import { Fila } from './Fila'
import { Formulario } from './Formulario'
import { TIPOS_SOCIO, type DatosSocio, type Socio, type TipoSocio } from '../types/api'

// Misma comprobación simple que hace el backend con el correo
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Props = {
  inicial?: Socio
  enviando: boolean
  error: string | null
  textoBoton: string
  onGuardar: (datos: DatosSocio) => void
}

// El formulario arma los datos y avisa; quien lo usa decide si crea o modifica.
export function FormularioSocio({ inicial, enviando, error, textoBoton, onGuardar }: Props) {
  const [campos, setCampos] = useState({
    nombre: inicial?.nombre ?? '',
    apellidos: inicial?.apellidos ?? '',
    email: inicial?.email ?? '',
    telefono: inicial?.telefono ?? '',
    fechaNacimiento: inicial?.fechaNacimiento?.slice(0, 10) ?? '',
    tipo: inicial?.tipo ?? 'general',
    activo: inicial?.activo ?? true,
  })
  const [errorLocal, setErrorLocal] = useState<string | null>(null)

  const cambiar = (nombre: keyof typeof campos, valor: string | boolean) => {
    setCampos((previos) => ({ ...previos, [nombre]: valor }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (campos.nombre.trim().length < 2) {
      setErrorLocal('El nombre debe tener al menos 2 caracteres')
      return
    }

    if (!EMAIL.test(campos.email.trim())) {
      setErrorLocal('El correo no tiene un formato válido')
      return
    }

    setErrorLocal(null)
    onGuardar({
      nombre: campos.nombre.trim(),
      apellidos: campos.apellidos.trim() || undefined,
      email: campos.email.trim(),
      telefono: campos.telefono.trim() || undefined,
      fechaNacimiento: campos.fechaNacimiento || undefined,
      tipo: (campos.tipo || 'general') as TipoSocio,
      activo: campos.activo,
    })
  }

  return (
    <Formulario onSubmit={handleSubmit}>
      <Fila>
        <Campo
          etiqueta="Nombre"
          valor={campos.nombre}
          onChange={(valor) => cambiar('nombre', valor)}
          placeholder="Lucía"
          disabled={enviando}
        />
        <Campo
          etiqueta="Apellidos"
          valor={campos.apellidos}
          onChange={(valor) => cambiar('apellidos', valor)}
          placeholder="Fernández Ruiz"
          disabled={enviando}
        />
      </Fila>
      <Campo
        etiqueta="Correo"
        valor={campos.email}
        onChange={(valor) => cambiar('email', valor)}
        type="email"
        placeholder="lucia@correo.com"
        disabled={enviando}
      />
      <Fila>
        <Campo
          etiqueta="Teléfono"
          valor={campos.telefono}
          onChange={(valor) => cambiar('telefono', valor)}
          type="tel"
          placeholder="600123456"
          disabled={enviando}
        />
        <Campo
          etiqueta="Fecha de nacimiento"
          valor={campos.fechaNacimiento}
          onChange={(valor) => cambiar('fechaNacimiento', valor)}
          type="date"
          disabled={enviando}
        />
      </Fila>
      <Campo
        etiqueta="Tipo"
        valor={campos.tipo}
        onChange={(valor) => cambiar('tipo', valor)}
        opciones={TIPOS_SOCIO}
        disabled={enviando}
      />
      <Casilla>
        <input
          type="checkbox"
          checked={campos.activo}
          onChange={(event) => cambiar('activo', event.target.checked)}
          disabled={enviando}
        />
        Socio activo
      </Casilla>
      {(errorLocal || error) && <Aviso role="alert">{errorLocal ?? error}</Aviso>}
      <Boton type="submit" disabled={enviando}>
        {enviando ? 'Guardando...' : textoBoton}
      </Boton>
    </Formulario>
  )
}
