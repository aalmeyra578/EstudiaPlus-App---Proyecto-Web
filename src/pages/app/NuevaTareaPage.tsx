import { useNavigate } from "react-router-dom"

import { TareaForm } from "@/components/app/TareaForm"
import { createTarea } from "@/services/tareas.service"
import type { TareaFormData } from "@/types/entities"

export function NuevaTareaPage() {
  const navigate = useNavigate()

  async function handleSave(data: TareaFormData) {
    await createTarea(data)
    navigate("/app/tareas")
  }

  return (
    <TareaForm
      title="Nueva tarea"
      saveLabel="Guardar tarea"
      onSave={handleSave}
    />
  )
}
