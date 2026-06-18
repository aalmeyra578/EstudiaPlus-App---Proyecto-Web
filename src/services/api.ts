import type { PostgrestError } from "@supabase/supabase-js"

import { supabase } from "@/lib/supabase"
import type {
  Apunte,
  ApunteFormData,
  Tarea,
  TareaFormData,
} from "@/types/entities"

function throwIfError(error: PostgrestError | null): void {
  if (error) throw error
}

/** Supabase table names as defined in the project schema. */
const TABLES = {
  tareas: "Tabla tareas",
  apuntes: "Apuntes",
} as const

// Tareas

export const getTareas = async (): Promise<Tarea[]> => {
  const { data, error } = await supabase.from(TABLES.tareas).select("*").order("id")
  throwIfError(error)
  return data as Tarea[]
}

export const getTarea = async (id: number): Promise<Tarea> => {
  const { data, error } = await supabase.from(TABLES.tareas).select("*").eq("id", id).single()
  throwIfError(error)
  return data as Tarea
}

export const createTarea = async (tarea: TareaFormData): Promise<Tarea> => {
  const { data, error } = await supabase.from(TABLES.tareas).insert([tarea]).select().single()
  throwIfError(error)
  return data as Tarea
}

export const updateTarea = async (id: number, tarea: TareaFormData): Promise<Tarea> => {
  const { data, error } = await supabase.from(TABLES.tareas).update(tarea).eq("id", id).select().single()
  throwIfError(error)
  return data as Tarea
}

export const deleteTarea = async (id: number): Promise<void> => {
  const { error } = await supabase.from(TABLES.tareas).delete().eq("id", id)
  throwIfError(error)
}

// Apuntes

export const getApuntes = async (): Promise<Apunte[]> => {
  const { data, error } = await supabase.from(TABLES.apuntes).select("*").order("id")
  throwIfError(error)
  return data as Apunte[]
}

export const getApunte = async (id: number): Promise<Apunte> => {
  const { data, error } = await supabase.from(TABLES.apuntes).select("*").eq("id", id).single()
  throwIfError(error)
  return data as Apunte
}

export const createApunte = async (apunte: ApunteFormData): Promise<Apunte> => {
  const { data, error } = await supabase.from(TABLES.apuntes).insert([apunte]).select().single()
  throwIfError(error)
  return data as Apunte
}

export const updateApunte = async (id: number, apunte: ApunteFormData): Promise<Apunte> => {
  const { data, error } = await supabase.from(TABLES.apuntes).update(apunte).eq("id", id).select().single()
  throwIfError(error)
  return data as Apunte
}

export const deleteApunte = async (id: number): Promise<void> => {
  const { error } = await supabase.from(TABLES.apuntes).delete().eq("id", id)
  throwIfError(error)
}
