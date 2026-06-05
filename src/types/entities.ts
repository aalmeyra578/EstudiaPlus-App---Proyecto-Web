export type Tarea = {
  id: number
  titulo: string
  descripcion: string
  materia: string
  fechaLimite: string | null
  prioridad: "baja" | "media" | "alta"
  estado: "pendiente" | "completada"
}

export type TareaFormData = Omit<Tarea, "id">

export type Apunte = {
  id: number
  titulo: string
  materia: string
  contenido: string
}

export type ApunteFormData = Omit<Apunte, "id">
