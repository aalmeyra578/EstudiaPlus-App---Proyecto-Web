import { useEffect, useState } from "react"
import { Edit } from "lucide-react"

import { AppButton } from "@/components/app/AppButton"
import { ItemActionButtons } from "@/components/app/ItemActionButtons"
import { ListItemCard } from "@/components/app/ListItemCard"
import { ListSection } from "@/components/app/ListSection"
import { MateriaBadge } from "@/components/app/MateriaBadge"
import { PageSearchTopbar } from "@/components/app/PageSearchTopbar"
import { SectionContainer } from "@/components/app/SectionContainer"
import { TaskCompletionControl } from "@/components/app/TaskCompletionControl"
import { TaskFilterTabs, type TaskFilterTab } from "@/components/app/TaskFilterTabs"

import { deleteTarea as deleteTareaApi, getTareas, updateTarea } from "@/services/api"
import type { Tarea } from "@/types/entities"

export function TareasPage() {
  const [filter, setFilter] = useState<TaskFilterTab>("todas")
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

  return (
    <div className="flex min-h-full flex-col bg-white">
      <PageSearchTopbar
        title="Mis tareas"
        searchPlaceholder="Buscar tarea"
        searchValue={search}
        onSearchChange={setSearch}
      />

      <SectionContainer>
        <ListSection
          loading={!error && loading}
          loadingText="Cargando tareas..."
          isEmpty={!error && !loading && filtered.length === 0}
          emptyText="No hay tareas para mostrar."
        >
          {error && (
            <p className="font-sans text-base text-red-600" role="alert">
              {error}
            </p>
          )}

          <TaskFilterTabs activeTab={filter} onChange={setFilter} />

          {filtered.map((tarea) => {
            const completada = tarea.estado === "completada"

            return (
              <ListItemCard key={tarea.id} className="py-0">
                <TaskCompletionControl
                  title={tarea.titulo}
                  completed={completada}
                  onToggle={() => toggleTarea(tarea)}
                />

                <MateriaBadge materia={tarea.materia} />

                <ItemActionButtons
                  editTo={`/app/tareas/${tarea.id}/editar`}
                  editAriaLabel="Editar tarea"
                  editIcon={Edit}
                  onDelete={() => handleDeleteTarea(tarea.id)}
                  deleteAriaLabel="Eliminar tarea"
                />
              </ListItemCard>
            )
          })}
        </ListSection>

        <div className="mt-auto">
          <AppButton variant="action" label="Nueva tarea" to="/app/tareas/nueva" />
        </div>
      </SectionContainer>
    </div>
  )
}
