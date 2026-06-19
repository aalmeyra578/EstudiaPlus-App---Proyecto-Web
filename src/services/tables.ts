import type { PostgrestError } from "@supabase/supabase-js"

/** Supabase table names as defined in the project schema. */
export const TABLES = {
  tareas: "Tabla tareas",
  apuntes: "Apuntes",
} as const

export function throwIfError(error: PostgrestError | null): void {
  if (error) throw error
}