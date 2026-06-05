import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Edit, Search, Trash2 } from "lucide-react"

import * as Checkbox from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { getMateriaColor, type MateriaColor } from "@/lib/materia"
import { deleteTarea as deleteTareaApi, getTareas, updateTarea } from "@/services/api"
import type { Tarea } from "@/types/entities"

type FilterTab = "todas" | "pendientes" | "completadas"

const BADGE_CLASSES: Record<MateriaColor, string> = {
  green: "bg-ep-badge-green border-ep-card-border",
  orange: "bg-ep-badge-orange border-ep-card-border",
}

export function TareasPage() {
  const [filter, setFilter] = useState<FilterTab>("todas")
  const [tareas, setTareas] = useState<Tarea[]>([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getTareas()
      .then(setTareas)
      .catch((err) => {
        setError(err instanceof Error ? err.message : "No se pudieron cargar las tareas.")
      })
      .finally(() => setLoading(false))
  }, [])

  const filtered = tareas.filter((t) => {
    const matchSearch = t.titulo.toLowerCase().includes(search.toLowerCase())
    if (filter === "pendientes") return t.estado === "pendiente" && matchSearch
    if (filter === "completadas") return t.estado === "completada" && matchSearch
    return matchSearch
  })

  async function toggleTarea(tarea: Tarea) {
    const nuevoEstado = tarea.estado === "completada" ? "pendiente" : "completada"
    try {
      const updated = await updateTarea(tarea.id, {
        titulo: tarea.titulo,
        descripcion: tarea.descripcion,
        materia: tarea.materia,
        fechaLimite: tarea.fechaLimite,
        prioridad: tarea.prioridad,
        estado: nuevoEstado,
      })
      setTareas((prev) => prev.map((t) => (t.id === tarea.id ? updated : t)))
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo actualizar la tarea.")
    }
  }

  async function handleDeleteTarea(id: number) {
    try {
      await deleteTareaApi(id)
      setTareas((prev) => prev.filter((t) => t.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo eliminar la tarea.")
    }
  }

  const tabs: { key: FilterTab; label: string }[] = [
    { key: "todas", label: "Todas" },
    { key: "pendientes", label: "Pendientes" },
    { key: "completadas", label: "Completadas" },
  ]

  return (
    <div className="flex min-h-full flex-col bg-white">
      <div
        className="flex min-h-[122px] items-center justify-between border-b border-black/5 px-6 sm:px-10"
        style={{ background: "var(--ep-topbar)" }}
      >
        <h1 className="font-mono text-4xl font-normal tracking-tight text-foreground sm:text-[48px]">
          Mis tareas
        </h1>
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
        {error && (
          <p className="font-sans text-base text-red-600" role="alert">
            {error}
          </p>
        )}

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

        <div className="flex flex-col gap-4">
          {loading && (
            <p className="font-sans text-base text-muted-foreground">Cargando tareas...</p>
          )}
          {!loading && filtered.length === 0 && (
            <p className="font-sans text-base text-muted-foreground">No hay tareas para mostrar.</p>
          )}
          {filtered.map((tarea) => {
            const completada = tarea.estado === "completada"
            const materiaColor = getMateriaColor(tarea.materia)

            return (
              <div
                key={tarea.id}
                className="flex items-center gap-4 rounded-nav border px-5 py-0"
                style={{
                  background: "var(--ep-task-card)",
                  borderColor: "var(--ep-card-border)",
                  minHeight: "119px",
                }}
              >
                <Checkbox.Root
                  checked={completada}
                  onCheckedChange={() => toggleTarea(tarea)}
                  className="flex size-[70px] shrink-0 items-center justify-center rounded-lg border-2 border-foreground/20 bg-white/60 transition-colors data-[state=checked]:bg-ep-action-green"
                  aria-label={`Marcar "${tarea.titulo}" como ${completada ? "pendiente" : "completada"}`}
                >
                  <Checkbox.Indicator>
                    <Check className="size-8 text-foreground" />
                  </Checkbox.Indicator>
                </Checkbox.Root>

                <span
                  className="flex-1 font-mono text-2xl leading-snug"
                  style={{
                    textDecoration: completada ? "line-through" : "none",
                    opacity: completada ? 0.5 : 1,
                  }}
                >
                  {tarea.titulo}
                </span>

                <span
                  className={`rounded-nav border px-5 py-2 font-mono text-2xl ${BADGE_CLASSES[materiaColor]}`}
                >
                  {tarea.materia}
                </span>

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
                    onClick={() => handleDeleteTarea(tarea.id)}
                    className="flex size-12 items-center justify-center rounded-[15px] transition-opacity hover:opacity-80"
                    style={{ background: "transparent" }}
                    aria-label="Eliminar tarea"
                  >
                    <Trash2 className="size-5" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

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
