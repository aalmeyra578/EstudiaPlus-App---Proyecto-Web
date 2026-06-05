import { useState } from "react"
import { Link } from "react-router-dom"
import { Edit, Search, Trash2 } from "lucide-react"

import * as Checkbox from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

type FilterTab = "todas" | "pendientes" | "completadas"

type Tarea = {
  id: number
  titulo: string
  materia: string
  materiaColor: "green" | "orange"
  completada: boolean
}

const MOCK_TAREAS: Tarea[] = [
  { id: 1, titulo: "Actividades de la unidad 1", materia: "Programacion", materiaColor: "green", completada: false },
  { id: 2, titulo: "Trabajo Practico", materia: "Seguridad Informatica", materiaColor: "orange", completada: false },
  { id: 3, titulo: "Trabajo Practico 2", materia: "Seguridad Informatica", materiaColor: "orange", completada: false },
]

const BADGE_CLASSES: Record<"green" | "orange", string> = {
  green: "bg-ep-badge-green border-ep-card-border",
  orange: "bg-ep-badge-orange border-ep-card-border",
}

export function TareasPage() {
  const [filter, setFilter] = useState<FilterTab>("todas")
  const [tareas, setTareas] = useState<Tarea[]>(MOCK_TAREAS)
  const [search, setSearch] = useState("")

  const filtered = tareas.filter((t) => {
    const matchSearch = t.titulo.toLowerCase().includes(search.toLowerCase())
    if (filter === "pendientes") return !t.completada && matchSearch
    if (filter === "completadas") return t.completada && matchSearch
    return matchSearch
  })

  function toggleTarea(id: number) {
    setTareas((prev) => prev.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t)))
  }

  function deleteTarea(id: number) {
    setTareas((prev) => prev.filter((t) => t.id !== id))
  }

  const tabs: { key: FilterTab; label: string }[] = [
    { key: "todas", label: "Todas" },
    { key: "pendientes", label: "Pendientes" },
    { key: "completadas", label: "Completadas" },
  ]

  return (
    <div className="flex min-h-full flex-col bg-white">
      {/* Top bar */}
      <div
        className="flex min-h-[122px] items-center justify-between border-b border-black/5 px-6 sm:px-10"
        style={{ background: "var(--ep-topbar)" }}
      >
        <h1 className="font-mono text-4xl font-normal tracking-tight text-foreground sm:text-[48px]">
          Mis tareas
        </h1>
        {/* Search bar */}
        <div className="flex h-[55px] items-center gap-2 rounded-pill bg-ep-nav/87 px-4 sm:w-[360px]">
          <Search className="size-5 shrink-0 text-foreground/70" />
          <input
            type="search"
            placeholder="Buscar tarea"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent font-mono text-xl text-foreground placeholder:text-foreground/60 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-6 px-6 py-6 sm:px-10">
        {/* Filter tabs */}
        <div className="flex flex-wrap items-center gap-4">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className="h-[55px] min-w-[120px] rounded-nav border px-5 font-sans text-[32px] leading-none transition-colors"
              style={{
                background: filter === key ? "var(--ep-task-card)" : "transparent",
                borderColor: filter === key ? "var(--ep-card-border)" : "transparent",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Task list */}
        <div className="flex flex-col gap-4">
          {filtered.length === 0 && (
            <p className="font-sans text-base text-muted-foreground">No hay tareas para mostrar.</p>
          )}
          {filtered.map((tarea) => (
            <div
              key={tarea.id}
              className="flex items-center gap-4 rounded-nav border px-5 py-0"
              style={{
                background: "var(--ep-task-card)",
                borderColor: "var(--ep-card-border)",
                minHeight: "119px",
              }}
            >
              {/* Checkbox */}
              <Checkbox.Root
                checked={tarea.completada}
                onCheckedChange={() => toggleTarea(tarea.id)}
                className="flex size-[70px] shrink-0 items-center justify-center rounded-lg border-2 border-foreground/20 bg-white/60 transition-colors data-[state=checked]:bg-ep-action-green"
                aria-label={`Marcar "${tarea.titulo}" como ${tarea.completada ? "pendiente" : "completada"}`}
              >
                <Checkbox.Indicator>
                  <Check className="size-8 text-foreground" />
                </Checkbox.Indicator>
              </Checkbox.Root>

              {/* Title */}
              <span
                className="flex-1 font-mono text-2xl leading-snug"
                style={{ textDecoration: tarea.completada ? "line-through" : "none", opacity: tarea.completada ? 0.5 : 1 }}
              >
                {tarea.titulo}
              </span>

              {/* Materia badge */}
              <span
                className={`rounded-nav border px-5 py-2 font-mono text-2xl ${BADGE_CLASSES[tarea.materiaColor]}`}
              >
                {tarea.materia}
              </span>

              {/* Action buttons */}
              <div className="flex gap-2">
                <Link
                  to={`/app/tareas/${tarea.id}/editar`}
                  className="flex size-12 items-center justify-center rounded-[15px] transition-opacity hover:opacity-80"
                  style={{ background: "rgba(59,240,156,0.24)", border: "1px solid #000" }}
                  aria-label="Editar tarea"
                >
                  <Edit className="size-5" />
                </Link>
                <button
                  type="button"
                  onClick={() => deleteTarea(tarea.id)}
                  className="flex size-12 items-center justify-center rounded-[15px] transition-opacity hover:opacity-80"
                  style={{ background: "transparent" }}
                  aria-label="Eliminar tarea"
                >
                  <Trash2 className="size-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* New task button */}
        <div className="mt-auto">
          <Link
            to="/app/tareas/nueva"
            className="inline-flex h-[68px] items-center rounded-[20px] px-6 font-mono text-2xl tracking-tight transition-opacity hover:opacity-90"
            style={{ background: "var(--ep-action-green)" }}
          >
            Nueva tarea
          </Link>
        </div>
      </div>
    </div>
  )
}
