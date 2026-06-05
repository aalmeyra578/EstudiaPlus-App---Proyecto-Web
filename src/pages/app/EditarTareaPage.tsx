import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { TareaForm } from "@/components/app/TareaForm"
import { getTarea, updateTarea } from "@/services/api"
import type { Tarea, TareaFormData } from "@/types/entities"

export function EditarTareaPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [tarea, setTarea] = useState<Tarea | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) {
      setError("ID de tarea inválido.")
      setLoading(false)
      return
    }

    getTarea(Number(id))
      .then(setTarea)
      .catch((err) => {
        setError(err instanceof Error ? err.message : "No se pudo cargar la tarea.")
      })
      .finally(() => setLoading(false))
  }, [id])

  async function handleSave(data: TareaFormData) {
    if (!id) return
    await updateTarea(Number(id), data)
    navigate("/app/tareas")
  }

  if (loading) {
    return (
      <div className="flex min-h-full items-center justify-center bg-white px-6">
        <p className="font-sans text-base text-muted-foreground">Cargando tarea...</p>
      </div>
    )
  }

  if (error || !tarea) {
    return (
      <div className="flex min-h-full items-center justify-center bg-white px-6">
        <p className="font-sans text-base text-red-600" role="alert">
          {error ?? "Tarea no encontrada."}
        </p>
      </div>
    )
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
