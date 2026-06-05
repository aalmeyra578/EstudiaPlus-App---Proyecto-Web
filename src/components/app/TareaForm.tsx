import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import * as Select from "@radix-ui/react-select"
import { Check, ChevronDown } from "lucide-react"

export type TareaFormData = {
  titulo: string
  descripcion: string
  materia: string
  fechaDia: string
  fechaMes: string
  fechaAnio: string
  prioridad: "baja" | "media" | "alta" | ""
  estado: "pendiente" | "completada" | ""
}

export const EMPTY_TAREA: TareaFormData = {
  titulo: "",
  descripcion: "",
  materia: "",
  fechaDia: "",
  fechaMes: "",
  fechaAnio: "",
  prioridad: "",
  estado: "",
}

const MATERIAS = ["Programacion", "Seguridad Informatica", "Redes", "Base de Datos", "Diseño Web"]

const MESES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
]

const ANIOS = Array.from({ length: 16 }, (_, i) => (2020 + i).toString())

function getDaysInMonth(mes: string, anioStr: string): number {
  const idx = MESES.indexOf(mes)
  if (idx < 0) return 31
  const y = parseInt(anioStr, 10) || new Date().getFullYear()
  // day 0 of next month gives the last day of the target month (handles leap years)
  return new Date(y, idx + 1, 0).getDate()
}

type Props = {
  title: string
  saveLabel: string
  defaultValues?: Partial<TareaFormData>
}

export function TareaForm({ title, saveLabel, defaultValues }: Props) {
  const navigate = useNavigate()
  const vals: TareaFormData = { ...EMPTY_TAREA, ...defaultValues }

  // Controlled date fields so that day options can react to month/year (and clamp invalid days)
  const [fechaDia, setFechaDia] = useState(vals.fechaDia || "")
  const [fechaMes, setFechaMes] = useState(vals.fechaMes || "")
  const [fechaAnio, setFechaAnio] = useState(vals.fechaAnio || "")

  // If month or year changes and the current day exceeds the new month's length, clamp it.
  useEffect(() => {
    if (!fechaMes || !fechaAnio || !fechaDia) return
    const max = getDaysInMonth(fechaMes, fechaAnio)
    const d = parseInt(fechaDia, 10)
    if (!isNaN(d) && d > max) {
      setFechaDia(max.toString())
    }
  }, [fechaMes, fechaAnio])

  const diasDisponibles = fechaMes && fechaAnio ? getDaysInMonth(fechaMes, fechaAnio) : 31
  const DIAS = Array.from({ length: diasDisponibles }, (_, i) => (i + 1).toString())

  return (
    <div className="flex min-h-full flex-col bg-white">
      {/* Top bar */}
      <div
        className="flex min-h-[122px] items-center border-b border-black/5 px-6 sm:px-10"
        style={{ background: "var(--ep-topbar)" }}
      >
        <h1 className="font-mono text-4xl font-normal tracking-tight text-foreground sm:text-[48px]">
          {title}
        </h1>
      </div>

      <div className="flex flex-1 flex-col gap-6 px-6 py-6 sm:px-10">
        {/* Título */}
        <div className="flex flex-col gap-1">
          <label className="font-sans text-2xl" htmlFor="task-title">
            Título de la tarea
          </label>
          <input
            id="task-title"
            type="text"
            defaultValue={vals.titulo}
            className="h-[70px] w-full rounded-field border border-ep-card-border bg-white px-5 font-mono text-[32px] tracking-tight text-foreground focus:outline-none focus:ring-2 focus:ring-ep-cta"
          />
        </div>

        {/* Descripción */}
        <div className="flex flex-col gap-1">
          <label className="font-sans text-2xl" htmlFor="task-desc">
            Descripción
          </label>
          <textarea
            id="task-desc"
            defaultValue={vals.descripcion}
            rows={4}
            className="w-full rounded-field border border-ep-card-border bg-white px-5 py-4 font-sans text-2xl font-normal text-foreground focus:outline-none focus:ring-2 focus:ring-ep-cta"
          />
        </div>

        {/* Materia + Fecha */}
        <div className="flex flex-wrap gap-8">
          {/* Materia select */}
          <div className="flex flex-col gap-1">
            <label className="font-sans text-2xl">Materia</label>
            <Select.Root defaultValue={vals.materia || undefined}>
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

          {/* Fecha límite - three linked selects (day options depend on month+year) */}
          <div className="flex flex-col gap-1">
            <label className="font-sans text-2xl">Fecha límite</label>
            <div className="flex items-center gap-2">
              {/* Día (dynamic options 1..N depending on selected month/year) */}
              <Select.Root value={fechaDia || undefined} onValueChange={setFechaDia}>
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

              {/* Mes (names, controlled) */}
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

              {/* Año (controlled select over a reasonable range) */}
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

        {/* Prioridad - single choice (radio) */}
        <div className="flex flex-wrap items-center gap-6">
          <span className="font-sans text-2xl">Prioridad:</span>
          {(["Baja", "Media", "Alta"] as const).map((p) => {
            const val = p.toLowerCase()
            return (
              <label key={p} className="flex cursor-pointer items-center gap-2 font-sans text-xl">
                <input
                  type="radio"
                  name="prioridad"
                  value={val}
                  defaultChecked={vals.prioridad === val}
                  className="peer sr-only"
                />
                <span className="flex size-4 items-center justify-center rounded border-2 border-foreground bg-[#2c2c2c] peer-checked:[&>svg]:opacity-100">
                  <Check className="size-3 text-white opacity-0" />
                </span>
                {p}
              </label>
            )
          })}
        </div>

        {/* Estado - single choice (radio) */}
        <div className="flex flex-wrap items-center gap-6">
          <span className="font-sans text-2xl">Estado:</span>
          {(["Pendiente", "Completada"] as const).map((e) => {
            const val = e.toLowerCase()
            return (
              <label key={e} className="flex cursor-pointer items-center gap-2 font-sans text-xl">
                <input
                  type="radio"
                  name="estado"
                  value={val}
                  defaultChecked={vals.estado === val}
                  className="peer sr-only"
                />
                <span className="flex size-4 items-center justify-center rounded border-2 border-foreground bg-[#2c2c2c] peer-checked:[&>svg]:opacity-100">
                  <Check className="size-3 text-white opacity-0" />
                </span>
                {e}
              </label>
            )
          })}
        </div>

        {/* Action buttons */}
        <div className="mt-4 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="h-[68px] min-w-[212px] rounded-[20px] font-mono text-2xl tracking-tight transition-opacity hover:opacity-90"
            style={{ background: "var(--ep-cancel-red)" }}
          >
            Cancelar
          </button>
          <button
            type="button"
            className="h-[68px] min-w-[212px] rounded-[20px] font-mono text-2xl tracking-tight transition-opacity hover:opacity-90"
            style={{ background: "var(--ep-action-green)" }}
          >
            {saveLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
