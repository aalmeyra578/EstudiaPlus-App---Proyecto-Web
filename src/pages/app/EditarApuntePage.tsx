import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { ApunteForm } from "@/components/app/ApunteForm"
import { getApunte, updateApunte } from "@/services/api"
import type { Apunte, ApunteFormData } from "@/types/entities"

export function EditarApuntePage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [apunte, setApunte] = useState<Apunte | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) {
      setError("ID de apunte inválido.")
      setLoading(false)
      return
    }

    getApunte(Number(id))
      .then(setApunte)
      .catch((err) => {
        setError(err instanceof Error ? err.message : "No se pudo cargar el apunte.")
      })
      .finally(() => setLoading(false))
  }, [id])

  async function handleSave(data: ApunteFormData) {
    if (!id) return
    await updateApunte(Number(id), data)
    navigate("/app/apuntes")
  }

  if (loading) {
    return (
      <div className="flex min-h-full items-center justify-center bg-white px-6">
        <p className="font-sans text-base text-muted-foreground">Cargando apunte...</p>
      </div>
    )
  }

  if (error || !apunte) {
    return (
      <div className="flex min-h-full items-center justify-center bg-white px-6">
        <p className="font-sans text-base text-red-600" role="alert">
          {error ?? "Apunte no encontrado."}
        </p>
      </div>
    )
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
