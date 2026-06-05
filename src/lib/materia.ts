export type MateriaColor = "green" | "orange"

const MATERIA_COLORS: Record<string, MateriaColor> = {
  Programacion: "green",
  "Seguridad Informatica": "orange",
  Redes: "orange",
  "Base de Datos": "green",
  "Diseño Web": "green",
}

/** Derives badge color from materia name; defaults to green for unknown subjects. */
export function getMateriaColor(materia: string): MateriaColor {
  return MATERIA_COLORS[materia] ?? "green"
}

export const MATERIAS = [
  "Programacion",
  "Seguridad Informatica",
  "Redes",
  "Base de Datos",
  "Diseño Web",
] as const
