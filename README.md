# Proyecto final

Frontend de la biblioteca, hecho con React y TypeScript. Va a consumir la API REST del curso
(Node + Express) para gestionar libros y socios.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

La app queda en `http://localhost:5173`.

## Estado

Proyecto base con Vite, React y TypeScript, tema de Emotion, router con páginas de inicio, libros,
socios, perfil y 404, layout privado con navbar y sidebar, login real contra la API con la sesión
en la cookie httpOnly, rutas privadas con redirección al login y cierre de sesión desde la navbar.
Libros y socios todavía son páginas de ejemplo: la conexión de los listados viene en los próximos
commits.

## API

El cliente HTTP apunta por defecto a `http://localhost:3000`. Para usar otra URL, definí
`VITE_API_URL` en un archivo `.env` en la raíz del proyecto.

## Usuario de prueba

Con el backend levantado:

- Correo: `alumno@biblioteca.local`
- Contraseña: `Biblioteca2026`
