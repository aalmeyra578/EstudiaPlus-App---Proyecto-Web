import { useParams } from "react-router-dom"

import { ApunteForm } from "@/components/app/ApunteForm"

const MOCK_APUNTES: Record<string, { titulo: string; contenido: string }> = {
  "1": {
    titulo: "Unidad 3 — Resumen",
    contenido:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  "2": {
    titulo: "Resumen Unidad 4",
    contenido: "Contenido del resumen de la unidad 4...",
  },
  "3": {
    titulo: "Apuntes clases",
    contenido: "Apuntes tomados durante las clases...",
  },
  "4": {
    titulo: "Codigo clase 1",
    contenido: "// Código de la clase 1\nconsole.log('Hola mundo');",
  },
}

export function EditarApuntePage() {
  const { id } = useParams<{ id: string }>()
  const data = id ? MOCK_APUNTES[id] : undefined

  return (
    <ApunteForm
      title="Editar apunte"
      saveLabel="Guardar apunte"
      defaultTitulo={data?.titulo ?? ""}
      defaultContenido={data?.contenido ?? ""}
    />
  )
}
