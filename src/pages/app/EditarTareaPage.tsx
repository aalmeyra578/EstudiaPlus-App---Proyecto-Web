import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { TareaForm } from "@/components/app/TareaForm"
import { StatusMessage } from "@/components/app/StatusMessage"
import { getTarea, updateTarea } from "@/services/api"
import type { Tarea, TareaFormData } from "@/types/entities"

export function EditarTareaPage() {
  const { id } = useParams<{ id: string }>()
  const parsedId = Number(id)
  const hasValidId = Number.isFinite(parsedId)
  const navigate = useNavigate()
  const [tarea, setTarea] = useState<Tarea | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!hasValidId) return

    getTarea(parsedId)
      .then(setTarea)
      .catch((err) => {
        setError(err instanceof Error ? err.message : "No se pudo cargar la tarea.")
      })
      .finally(() => setLoading(false))
  }, [hasValidId, parsedId])

  async function handleSave(data: TareaFormData) {
    await updateTarea(parsedId, data)
    navigate("/app/tareas")
  }

  if (!hasValidId) return <StatusMessage error="ID de tarea inválido." fullPage />

  if (loading) return <StatusMessage loading loadingText="Cargando tarea..." fullPage />

  if (error || !tarea) {
    return <StatusMessage error={error ?? "Tarea no encontrada."} fullPage />
  }

  return (
    <TareaForm
      title="Editar tarea"
      saveLabel="Guardar"
      defaultValues={tarea}
      onSave={handleSave}
    />
  )
}
