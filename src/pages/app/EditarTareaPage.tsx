import { useParams } from "react-router-dom"

import { TareaForm } from "@/components/app/TareaForm"

/** Mock data keyed by task id. */
const MOCK_DATA: Record<string, { titulo: string; descripcion: string; materia: string; fechaDia: string; fechaMes: string; fechaAnio: string; prioridad: "baja" | "media" | "alta" | ""; estado: "pendiente" | "completada" | "" }> = {
  "1": {
    titulo: "Actividades de la unidad 1",
    descripcion: "",
    materia: "Programacion",
    fechaDia: "10",
    fechaMes: "Abril",
    fechaAnio: "2026",
    prioridad: "media",
    estado: "pendiente",
  },
  "2": {
    titulo: "Trabajo Practico",
    descripcion: "",
    materia: "Seguridad Informatica",
    fechaDia: "20",
    fechaMes: "Abril",
    fechaAnio: "2026",
    prioridad: "alta",
    estado: "pendiente",
  },
}

export function EditarTareaPage() {
  const { id } = useParams<{ id: string }>()
  const data = id ? MOCK_DATA[id] : undefined

  return (
    <TareaForm
      title="Editar tarea"
      saveLabel="Guardar"
      defaultValues={data}
    />
  )
}
