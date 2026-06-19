import { useEffect, useMemo, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { StatusMessage } from "@/components/app/StatusMessage"
import { groupByCalendarDay } from "@/lib/date"
import { getMateriaColor } from "@/lib/materia"
import { getTareas } from "@/services/tareas.service"
import type { Tarea } from "@/types/entities"

const WEEKDAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]

const MONTH_NAMES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
]

function buildCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  const remainder = cells.length % 7
  if (remainder !== 0) {
    for (let i = 0; i < 7 - remainder; i++) cells.push(null)
  }
  return cells
}

function calendarDayKey(year: number, month: number, day: number): string {
  return `${year}-${month + 1}-${day}`
}

export function CalendarioPage() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [tareas, setTareas] = useState<Tarea[]>([])
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

  const tareasPorDia = useMemo(() => groupByCalendarDay(tareas), [tareas])

  const cells = buildCalendarDays(year, month)
  const rowCount = Math.ceil(cells.length / 7)
  const dayKey = selectedDay != null ? calendarDayKey(year, month, selectedDay) : ""
  const tareasDelDia = dayKey ? (tareasPorDia[dayKey] ?? []) : []

  function prevMonth() {
    if (month === 0) { setMonth(11); setYear((y) => y - 1) }
    else setMonth((m) => m - 1)
    setSelectedDay(null)
  }

  function nextMonth() {
    if (month === 11) { setMonth(0); setYear((y) => y + 1) }
    else setMonth((m) => m + 1)
    setSelectedDay(null)
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-white">
      <div
        className="flex min-h-[122px] items-center border-b border-black/5 px-6 sm:px-10"
        style={{ background: "var(--ep-topbar)" }}
      >
        <h1 className="font-mono text-4xl font-normal tracking-tight text-foreground sm:text-[48px]">
          Calendario
        </h1>
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-6 py-6 sm:px-10">
        <div className="mb-4 flex shrink-0 items-center gap-4">
          <button
            type="button"
            onClick={prevMonth}
            className="flex size-10 items-center justify-center rounded-full hover:bg-black/5"
            aria-label="Mes anterior"
          >
            <ChevronLeft className="size-6" />
          </button>
          <span className="font-mono text-4xl font-normal tracking-tight sm:text-[48px]">
            {MONTH_NAMES[month]} {year}
          </span>
          <button
            type="button"
            onClick={nextMonth}
            className="flex size-10 items-center justify-center rounded-full hover:bg-black/5"
            aria-label="Mes siguiente"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-8">
          <div
            className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-3xl border"
            style={{ borderColor: "var(--ep-card-border)" }}
          >
            <div
              className="grid shrink-0 grid-cols-7 border-b"
              style={{ borderColor: "var(--ep-card-border)" }}
            >
              {WEEKDAYS.map((d, i) => {
                const isFirst = i === 0
                const isLast = i === 6
                return (
                  <div
                    key={d}
                    className={`py-3 text-center font-mono text-sm font-medium text-foreground/60 ${isLast ? "" : "border-r"} ${isFirst ? "rounded-tl-3xl" : ""} ${isLast ? "rounded-tr-3xl" : ""}`}
                    style={{ borderColor: "var(--ep-card-border)" }}
                  >
                    {d}
                  </div>
                )
              })}
            </div>

            <div
              className="grid min-h-0 flex-1 grid-cols-7"
              style={{ gridTemplateRows: `repeat(${rowCount}, minmax(0, 1fr))` }}
            >
              {cells.map((day, idx) => {
                const isSelected = day != null && day === selectedDay
                const key = day != null ? calendarDayKey(year, month, day) : ""
                const hasTask = day != null && (tareasPorDia[key]?.length ?? 0) > 0
                const col = idx % 7
                const isLastCol = col === 6
                const isLastRow = idx >= cells.length - 7
                const isBottomLeft = isLastRow && col === 0
                const isBottomRight = isLastRow && col === 6
                const isFiller = day == null
                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isFiller}
                    onClick={() => !isFiller && setSelectedDay(day)}
                    className={`relative flex h-full min-h-0 flex-col items-center justify-start gap-1 p-2 font-mono text-base transition-colors disabled:cursor-default ${!isFiller ? "hover:bg-black/5" : ""} ${isLastRow ? "" : "border-b"} ${isLastCol ? "" : "border-r"} ${isBottomLeft ? "rounded-bl-3xl" : ""} ${isBottomRight ? "rounded-br-3xl" : ""}`}
                    style={{
                      borderColor: "var(--ep-card-border)",
                      background: isSelected
                        ? "var(--ep-task-card)"
                        : isFiller
                          ? "rgba(219, 219, 219, 0.35)"
                          : undefined,
                    }}
                  >
                    {day != null && (
                      <>
                        <span className={isSelected ? "font-bold" : ""}>{day}</span>
                        {hasTask && (
                          <span
                            className="h-[8px] w-[40px] rounded-full"
                            style={{ background: "var(--ep-badge-orange)" }}
                          />
                        )}
                      </>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          <div
            className="flex w-full flex-col gap-3 rounded-3xl border p-4 lg:w-[441px] lg:shrink-0"
            style={{ background: "var(--ep-task-card)", borderColor: "#000" }}
          >
            <h2 className="font-mono text-xl font-semibold">
              {selectedDay != null
                ? `${selectedDay} de ${MONTH_NAMES[month]}`
                : "Seleccioná un día"}
            </h2>

            <StatusMessage loading={loading} loadingText="Cargando tareas..." size="sm" />
            <StatusMessage error={error} size="sm" />

            <StatusMessage
              isEmpty={!loading && !error && selectedDay == null}
              emptyText="Hacé clic en un día del calendario para ver las tareas asignadas."
              size="sm"
            />

            <StatusMessage
              isEmpty={!loading && !error && selectedDay != null && tareasDelDia.length === 0}
              emptyText="Sin tareas para este día."
              size="sm"
            />

            {!loading &&
              !error &&
              tareasDelDia.map((tarea) => {
                const materiaColor = getMateriaColor(tarea.materia)
                return (
                  <div
                    key={tarea.id}
                    className="flex flex-col gap-1 rounded-[25px] border p-3"
                    style={{ background: "#f0fff3", borderColor: "var(--ep-card-border)" }}
                  >
                    <span
                      className="self-start rounded-[25px] px-4 py-1 font-mono text-lg"
                      style={{
                        background:
                          materiaColor === "green"
                            ? "var(--ep-badge-green)"
                            : "var(--ep-badge-orange)",
                        border: "1px solid var(--ep-card-border)",
                      }}
                    >
                      {tarea.materia}
                    </span>
                    <div
                      className="mt-1 flex items-center gap-2 rounded-[25px] border p-2"
                      style={{ background: "#f0fff3", borderColor: "var(--ep-card-border)" }}
                    >
                      <div
                        className="flex size-[44px] shrink-0 items-center justify-center rounded-[15px]"
                        style={{
                          background: tarea.estado
                            ? "rgba(59,240,156,0.5)"
                            : "rgba(59,240,156,0.24)",
                          border: "1px solid #000",
                        }}
                        aria-hidden
                      >
                        <span className={`text-lg ${tarea.estado ? "" : "opacity-40"}`}>✓</span>
                      </div>
                      <span
                        className={`font-mono text-xl leading-snug ${tarea.estado ? "text-foreground/50 line-through" : ""}`}
                      >
                        {tarea.titulo}
                      </span>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
