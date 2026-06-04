import { useParams } from "react-router-dom"

/** Edit task screen placeholder; reads dynamic task id from the URL. */
export function EditarTareaPage() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="flex min-h-full flex-col bg-white">
      <div
        className="flex min-h-[122px] items-center border-b border-black/5 px-6 sm:px-10"
        style={{ background: "var(--ep-topbar)" }}
      >
        <h1 className="font-mono text-4xl font-normal tracking-tight text-foreground sm:text-[48px]">
          Editar tarea — ID: {id}
        </h1>
      </div>
    </div>
  )
}
