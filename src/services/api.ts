import type { Apunte, ApunteFormData, Tarea, TareaFormData } from "@/types/entities"

const BASE = import.meta.env.VITE_API_URL ?? "http://localhost:3000"

class ApiError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = "ApiError"
    this.status = status
  }
}

async function apiFetch<T>(
  method: string,
  path: string,
  body?: unknown
): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: body !== undefined ? { "Content-Type": "application/json" } : undefined,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })

  if (!res.ok) {
    const text = await res.text().catch(() => "")
    throw new ApiError(text || `Request failed with status ${res.status}`, res.status)
  }

  if (res.status === 204) return undefined as T
  return res.json() as Promise<T>
}

// Tareas
export const getTareas = (): Promise<Tarea[]> => apiFetch("GET", "/tareas")
export const getTarea = (id: number): Promise<Tarea> => apiFetch("GET", `/tareas/${id}`)
export const createTarea = (data: TareaFormData): Promise<Tarea> =>
  apiFetch("POST", "/tareas", data)
export const updateTarea = (id: number, data: TareaFormData): Promise<Tarea> =>
  apiFetch("PUT", `/tareas/${id}`, data)
export const deleteTarea = (id: number): Promise<void> =>
  apiFetch("DELETE", `/tareas/${id}`)

// Apuntes
export const getApuntes = (): Promise<Apunte[]> => apiFetch("GET", "/apuntes")
export const getApunte = (id: number): Promise<Apunte> => apiFetch("GET", `/apuntes/${id}`)
export const createApunte = (data: ApunteFormData): Promise<Apunte> =>
  apiFetch("POST", "/apuntes", data)
export const updateApunte = (id: number, data: ApunteFormData): Promise<Apunte> =>
  apiFetch("PUT", `/apuntes/${id}`, data)
export const deleteApunte = (id: number): Promise<void> =>
  apiFetch("DELETE", `/apuntes/${id}`)
