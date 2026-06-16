import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { ApunteForm } from "@/components/app/ApunteForm"
import { StatusMessage } from "@/components/app/StatusMessage"
import { getApunte, updateApunte } from "@/services/api"
import type { Apunte, ApunteFormData } from "@/types/entities"

export function EditarApuntePage() {
  const { id } = useParams<{ id: string }>()
  const parsedId = Number(id)
  const hasValidId = Number.isFinite(parsedId)
  const navigate = useNavigate()
  const [apunte, setApunte] = useState<Apunte | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!hasValidId) return

    getApunte(parsedId)
      .then(setApunte)
      .catch((err) => {
        setError(err instanceof Error ? err.message : "No se pudo cargar el apunte.")
      })
      .finally(() => setLoading(false))
  }, [hasValidId, parsedId])

  async function handleSave(data: ApunteFormData) {
    await updateApunte(parsedId, data)
    navigate("/app/apuntes")
  }

  if (!hasValidId) return <StatusMessage error="ID de apunte inválido." fullPage />

  if (loading) return <StatusMessage loading loadingText="Cargando apunte..." fullPage />

  if (error || !apunte) {
    return <StatusMessage error={error ?? "Apunte no encontrado."} fullPage />
  }

  return (
    <ApunteForm
      title="Editar apunte"
      saveLabel="Guardar apunte"
      defaultTitulo={apunte.titulo}
      defaultContenido={apunte.contenido}
      defaultMateria={apunte.materia}
      onSave={handleSave}
    />
  )
}
