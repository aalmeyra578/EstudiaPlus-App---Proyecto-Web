import { useState } from "react"
import { useNavigate } from "react-router-dom"

import * as Select from "@radix-ui/react-select"
import { Check, ChevronDown } from "lucide-react"

import { buildFechaLimite, getDaysInMonth, MESES, parseFechaLimite } from "@/lib/date"
import { MATERIAS } from "@/lib/materia"
import type { TareaFormData } from "@/types/entities"

type Props = {
  title: string
  saveLabel: string
  defaultValues?: Partial<TareaFormData>
  onSave: (data: TareaFormData) => Promise<void>
}

const ANIOS = Array.from({ length: 16 }, (_, i) => (2020 + i).toString())

export function TareaForm({ title, saveLabel, defaultValues, onSave }: Props) {
  const navigate = useNavigate()
  const fechaInicial = parseFechaLimite(defaultValues?.fechaLimite ?? null)

  const [titulo, setTitulo] = useState(defaultValues?.titulo ?? "")
  const [descripción, setDescripción] = useState(defaultValues?.descripción ?? "")
  const [materia, setMateria] = useState(defaultValues?.materia ?? "")
  const [fechaDia, setFechaDia] = useState(fechaInicial.dia)
  const [fechaMes, setFechaMes] = useState(fechaInicial.mes)
  const [fechaAnio, setFechaAnio] = useState(fechaInicial.anio)
  const [prioridad, setPrioridad] = useState<TareaFormData["prioridad"]>(
    defaultValues?.prioridad ?? "media"
  )
  const [estado, setEstado] = useState(defaultValues?.estado ?? false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const diasDisponibles = fechaMes && fechaAnio ? getDaysInMonth(fechaMes, fechaAnio) : 31
  const diaNumerico = parseInt(fechaDia, 10)
  const fechaDiaNormalizada =
    !Number.isNaN(diaNumerico) && diaNumerico > diasDisponibles
      ? diasDisponibles.toString()
      : fechaDia
  const DIAS = Array.from({ length: diasDisponibles }, (_, i) => (i + 1).toString())

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await onSave({
        titulo,
        descripción,
        materia,
        fechaLimite: buildFechaLimite(fechaDiaNormalizada, fechaMes, fechaAnio),
        prioridad,
        estado,
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo guardar la tarea.")
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
          <label className="font-sans text-2xl" htmlFor="task-title">
            Título de la tarea
          </label>
          <input
            id="task-title"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            className="h-[70px] w-full rounded-field border border-ep-card-border bg-white px-5 font-mono text-[32px] tracking-tight text-foreground focus:outline-none focus:ring-2 focus:ring-ep-cta"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-sans text-2xl" htmlFor="task-desc">
            Descripción
          </label>
          <textarea
            id="task-desc"
            value={descripción}
            onChange={(e) => setDescripción(e.target.value)}
            rows={4}
            className="w-full rounded-field border border-ep-card-border bg-white px-5 py-4 font-sans text-2xl font-normal text-foreground focus:outline-none focus:ring-2 focus:ring-ep-cta"
          />
        </div>

        <div className="flex flex-wrap gap-8">
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

          <div className="flex flex-col gap-1">
            <label className="font-sans text-2xl">Fecha límite</label>
            <div className="flex items-center gap-2">
              <Select.Root value={fechaDiaNormalizada || undefined} onValueChange={setFechaDia}>
                <Select.Trigger
                  className="flex h-10 w-[70px] items-center justify-between rounded-lg border border-ep-card-border bg-white px-2 font-sans text-xl text-foreground focus:outline-none focus:ring-2 focus:ring-ep-cta"
                  aria-label="Seleccionar día"
                >
                  <Select.Value placeholder="Día" />
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
                    <Select.Viewport className="max-h-[240px] overflow-auto p-1">
                      {DIAS.map((d) => (
                        <Select.Item
                          key={d}
                          value={d}
                          className="flex cursor-pointer items-center justify-center rounded px-2 py-1 font-sans text-xl text-foreground outline-none hover:bg-ep-task-card data-[highlighted]:bg-ep-task-card"
                        >
                          <Select.ItemText>{d}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>

              <Select.Root value={fechaMes || undefined} onValueChange={setFechaMes}>
                <Select.Trigger
                  className="flex h-10 w-[150px] items-center justify-between rounded-lg border border-ep-card-border bg-white px-4 font-sans text-xl text-foreground focus:outline-none focus:ring-2 focus:ring-ep-cta"
                  aria-label="Seleccionar mes"
                >
                  <Select.Value placeholder="Mes" />
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
                    <Select.Viewport className="max-h-[320px] overflow-auto p-1">
                      {MESES.map((mes) => (
                        <Select.Item
                          key={mes}
                          value={mes}
                          className="flex cursor-pointer items-center rounded px-4 py-1.5 font-sans text-xl text-foreground outline-none hover:bg-ep-task-card data-[highlighted]:bg-ep-task-card"
                        >
                          <Select.ItemText>{mes}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>

              <Select.Root value={fechaAnio || undefined} onValueChange={setFechaAnio}>
                <Select.Trigger
                  className="flex h-10 w-[90px] items-center justify-between rounded-lg border border-ep-card-border bg-white px-3 font-sans text-xl text-foreground focus:outline-none focus:ring-2 focus:ring-ep-cta"
                  aria-label="Seleccionar año"
                >
                  <Select.Value placeholder="Año" />
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
                      {ANIOS.map((y) => (
                        <Select.Item
                          key={y}
                          value={y}
                          className="flex cursor-pointer items-center justify-center rounded px-3 py-1 font-sans text-xl text-foreground outline-none hover:bg-ep-task-card data-[highlighted]:bg-ep-task-card"
                        >
                          <Select.ItemText>{y}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <span className="font-sans text-2xl">Prioridad:</span>
          {(["baja", "media", "alta"] as const).map((p) => (
            <label key={p} className="flex cursor-pointer items-center gap-2 font-sans text-xl capitalize">
              <input
                type="radio"
                name="prioridad"
                value={p}
                checked={prioridad === p}
                onChange={() => setPrioridad(p)}
                className="peer sr-only"
              />
              <span className="flex size-4 items-center justify-center rounded border-2 border-foreground bg-[#2c2c2c] peer-checked:[&>svg]:opacity-100">
                <Check className="size-3 text-white opacity-0" />
              </span>
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </label>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <span className="font-sans text-2xl">Estado:</span>
          {(
            [
              { label: "Pendiente", value: false },
              { label: "Completada", value: true },
            ] as const
          ).map(({ label, value }) => (
            <label key={label} className="flex cursor-pointer items-center gap-2 font-sans text-xl">
              <input
                type="radio"
                name="estado"
                checked={estado === value}
                onChange={() => setEstado(value)}
                className="peer sr-only"
              />
              <span className="flex size-4 items-center justify-center rounded border-2 border-foreground bg-[#2c2c2c] peer-checked:[&>svg]:opacity-100">
                <Check className="size-3 text-white opacity-0" />
              </span>
              {label}
            </label>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
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
