import { useState } from "react"
import { useNavigate } from "react-router-dom"

import * as Select from "@radix-ui/react-select"
import { ChevronDown } from "lucide-react"

import { MATERIAS } from "@/lib/materia"
import type { ApunteFormData } from "@/types/entities"

type Props = {
  title: string
  saveLabel: string
  defaultTitulo?: string
  defaultContenido?: string
  defaultMateria?: string
  onSave: (data: ApunteFormData) => Promise<void>
}

export function ApunteForm({
  title,
  saveLabel,
  defaultTitulo = "",
  defaultContenido = "",
  defaultMateria = "",
  onSave,
}: Props) {
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState(defaultTitulo)
  const [contenido, setContenido] = useState(defaultContenido)
  const [materia, setMateria] = useState(defaultMateria)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await onSave({ titulo, contenido, materia })
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo guardar el apunte.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-full flex-col bg-white">
      <div
        className="flex min-h-[122px] items-center border-b border-black/5 px-6 sm:px-10"
        style={{ background: "var(--ep-topbar)" }}
      >
        <h1 className="font-mono text-4xl font-normal tracking-tight text-foreground sm:text-[48px]">
          {title}
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-1 flex-col gap-6 px-6 py-6 sm:px-10"
      >
        {error && (
          <p className="font-sans text-base text-red-600" role="alert">
            {error}
          </p>
        )}

        <div className="flex flex-col gap-1">
          <label className="font-sans text-2xl" htmlFor="note-title">
            Título del apunte
          </label>
          <input
            id="note-title"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            className="h-[70px] w-full rounded-field border border-ep-card-border bg-white px-5 font-mono text-[32px] tracking-tight text-foreground focus:outline-none focus:ring-2 focus:ring-ep-cta"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-sans text-2xl">Materia</label>
          <Select.Root value={materia || undefined} onValueChange={setMateria}>
            <Select.Trigger
              className="flex h-10 min-w-[339px] items-center justify-between rounded-lg border border-ep-card-border bg-white px-4 font-sans text-xl text-foreground focus:outline-none focus:ring-2 focus:ring-ep-cta"
              aria-label="Seleccionar materia"
            >
              <Select.Value placeholder="Seleccionar materia" />
              <Select.Icon>
                <ChevronDown className="size-4" />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content
                className="z-50 overflow-hidden rounded-lg border border-ep-card-border bg-white shadow-lg"
                position="popper"
                sideOffset={4}
              >
                <Select.Viewport className="p-1">
                  {MATERIAS.map((m) => (
                    <Select.Item
                      key={m}
                      value={m}
                      className="flex cursor-pointer items-center rounded px-4 py-2 font-sans text-xl text-foreground outline-none hover:bg-ep-task-card data-[highlighted]:bg-ep-task-card"
                    >
                      <Select.ItemText>{m}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        <div className="flex flex-1 flex-col gap-1">
          <label className="font-semibold font-sans text-2xl" htmlFor="note-content">
            Apunte
          </label>
          <textarea
            id="note-content"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            className="min-h-[400px] flex-1 w-full rounded-lg border border-ep-card-border bg-white px-5 py-4 font-sans text-2xl font-normal text-foreground focus:outline-none focus:ring-2 focus:ring-ep-cta lg:min-h-[635px]"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            disabled={loading}
            className="h-[68px] min-w-[212px] rounded-[20px] font-mono text-2xl tracking-tight transition-opacity hover:opacity-90 disabled:opacity-50"
            style={{ background: "var(--ep-cancel-red)" }}
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={loading}
            className="h-[68px] min-w-[212px] rounded-[20px] font-mono text-2xl tracking-tight transition-opacity hover:opacity-90 disabled:opacity-50"
            style={{ background: "var(--ep-action-green)" }}
          >
            {loading ? "Guardando..." : saveLabel}
          </button>
        </div>
      </form>
    </div>
  )
}
