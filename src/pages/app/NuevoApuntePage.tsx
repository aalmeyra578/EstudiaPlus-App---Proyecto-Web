import { useNavigate } from "react-router-dom"

import { ApunteForm } from "@/components/app/ApunteForm"
import { createApunte } from "@/services/apuntes.service"
import type { ApunteFormData } from "@/types/entities"

export function NuevoApuntePage() {
  const navigate = useNavigate()

  async function handleSave(data: ApunteFormData) {
    await createApunte(data)
    navigate("/app/apuntes")
  }

  return (
    <ApunteForm
      title="Nuevo apunte"
      saveLabel="Guardar apunte"
      onSave={handleSave}
    />
  )
}
