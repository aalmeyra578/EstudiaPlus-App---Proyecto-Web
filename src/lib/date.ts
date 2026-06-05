const MESES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
] as const

export type FechaPartes = {
  dia: string
  mes: string
  anio: string
}

/** Splits an ISO date string into day/month/year parts for form fields. */
export function parseFechaLimite(iso: string | null): FechaPartes {
  if (!iso) return { dia: "", mes: "", anio: "" }

  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return { dia: "", mes: "", anio: "" }

  return {
    dia: String(date.getDate()),
    mes: MESES[date.getMonth()] ?? "",
    anio: String(date.getFullYear()),
  }
}

/** Builds an ISO date string from form day/month/year parts; returns null if incomplete. */
export function buildFechaLimite(dia: string, mes: string, anio: string): string | null {
  const mesIdx = MESES.indexOf(mes as (typeof MESES)[number])
  if (!dia || mesIdx < 0 || !anio) return null

  const y = parseInt(anio, 10)
  const d = parseInt(dia, 10)
  if (Number.isNaN(y) || Number.isNaN(d)) return null

  const date = new Date(y, mesIdx, d)
  return date.toISOString()
}

export { MESES }

export function getDaysInMonth(mes: string, anioStr: string): number {
  const idx = MESES.indexOf(mes as (typeof MESES)[number])
  if (idx < 0) return 31
  const y = parseInt(anioStr, 10) || new Date().getFullYear()
  return new Date(y, idx + 1, 0).getDate()
}
