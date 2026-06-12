import { BADGE_CLASSES, getMateriaColor } from "@/lib/materia"

interface MateriaBadgeProps {
  materia: string
}

export function MateriaBadge({ materia }: MateriaBadgeProps) {
  const materiaColor = getMateriaColor(materia)

  return (
    <span className={`rounded-nav border px-5 py-2 font-mono text-2xl ${BADGE_CLASSES[materiaColor]}`}>
      {materia}
    </span>
  )
}
