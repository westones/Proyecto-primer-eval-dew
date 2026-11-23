import { useState, type FormEvent } from 'react'
import { Aviso } from './Aviso'
import { Boton } from './Boton'
import { Campo } from './Campo'
import { Casilla } from './Casilla'
import { Fila } from './Fila'
import { Formulario } from './Formulario'
import { GENEROS, type DatosLibro, type Libro } from '../types/api'

type Props = {
  inicial?: Libro
  enviando: boolean
  error: string | null
  textoBoton: string
  onGuardar: (datos: DatosLibro) => void
}

// El formulario arma los datos y avisa; quien lo usa decide si crea o modifica.
export function FormularioLibro({ inicial, enviando, error, textoBoton, onGuardar }: Props) {
  const [campos, setCampos] = useState({
    titulo: inicial?.titulo ?? '',
    autor: inicial?.autor ?? '',
    isbn: inicial?.isbn ?? '',
    genero: inicial?.genero ?? '',
    anioPublicacion: inicial?.anioPublicacion ? String(inicial.anioPublicacion) : '',
    paginas: inicial?.paginas ? String(inicial.paginas) : '',
    disponible: inicial?.disponible ?? true,
  })
  const [errorLocal, setErrorLocal] = useState<string | null>(null)

  const cambiar = (nombre: keyof typeof campos, valor: string | boolean) => {
    setCampos((previos) => ({ ...previos, [nombre]: valor }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (campos.titulo.trim().length < 2) {
      setErrorLocal('El título debe tener al menos 2 caracteres')
      return
    }

    if (campos.autor.trim().length < 2) {
      setErrorLocal('El autor debe tener al menos 2 caracteres')
      return
    }

    setErrorLocal(null)
    onGuardar({
      titulo: campos.titulo.trim(),
      autor: campos.autor.trim(),
      isbn: campos.isbn.trim() || undefined,
      genero: campos.genero || undefined,
      anioPublicacion: campos.anioPublicacion ? Number(campos.anioPublicacion) : undefined,
      paginas: campos.paginas ? Number(campos.paginas) : undefined,
      disponible: campos.disponible,
    })
  }

  return (
    <Formulario onSubmit={handleSubmit}>
      <Campo
        etiqueta="Título"
        valor={campos.titulo}
        onChange={(valor) => cambiar('titulo', valor)}
        placeholder="Cien años de soledad"
        disabled={enviando}
      />
      <Campo
        etiqueta="Autor"
        valor={campos.autor}
        onChange={(valor) => cambiar('autor', valor)}
        placeholder="Gabriel García Márquez"
        disabled={enviando}
      />
      <Campo
        etiqueta="Género"
        valor={campos.genero}
        onChange={(valor) => cambiar('genero', valor)}
        opciones={GENEROS}
        disabled={enviando}
      />
      <Campo
        etiqueta="ISBN"
        valor={campos.isbn}
        onChange={(valor) => cambiar('isbn', valor)}
        placeholder="9780307474728"
        disabled={enviando}
      />
      <Fila>
        <Campo
          etiqueta="Año de publicación"
          valor={campos.anioPublicacion}
          onChange={(valor) => cambiar('anioPublicacion', valor)}
          type="number"
          placeholder="1967"
          disabled={enviando}
        />
        <Campo
          etiqueta="Páginas"
          valor={campos.paginas}
          onChange={(valor) => cambiar('paginas', valor)}
          type="number"
          placeholder="471"
          disabled={enviando}
        />
      </Fila>
      <Casilla>
        <input
          type="checkbox"
          checked={campos.disponible}
          onChange={(event) => cambiar('disponible', event.target.checked)}
          disabled={enviando}
        />
        Disponible para prestar
      </Casilla>
      {(errorLocal || error) && <Aviso role="alert">{errorLocal ?? error}</Aviso>}
      <Boton type="submit" disabled={enviando}>
        {enviando ? 'Guardando...' : textoBoton}
      </Boton>
    </Formulario>
  )
}
