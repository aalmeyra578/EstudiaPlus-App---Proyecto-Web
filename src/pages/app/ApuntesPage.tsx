import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Eye, FileText, Search, Trash2 } from "lucide-react"

import { getMateriaColor, type MateriaColor } from "@/lib/materia"
import { deleteApunte as deleteApunteApi, getApuntes } from "@/services/api"
import type { Apunte } from "@/types/entities"

const BADGE_CLASSES: Record<MateriaColor, string> = {
  green: "bg-ep-badge-green border-ep-card-border",
  orange: "bg-ep-badge-orange border-ep-card-border",
}

export function ApuntesPage() {
  const [apuntes, setApuntes] = useState<Apunte[]>([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getApuntes()
      .then(setApuntes)
      .catch((err) => {
        setError(err instanceof Error ? err.message : "No se pudieron cargar los apuntes.")
      })
      .finally(() => setLoading(false))
  }, [])

  const filtered = apuntes.filter((a) =>
    a.titulo.toLowerCase().includes(search.toLowerCase())
  )

  async function handleDeleteApunte(id: number) {
    try {
      await deleteApunteApi(id)
      setApuntes((prev) => prev.filter((a) => a.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo eliminar el apunte.")
    }
  }

  return (
    <div className="flex min-h-full flex-col bg-white">
      <div
        className="flex min-h-[122px] items-center justify-between border-b border-black/5 px-6 sm:px-10"
        style={{ background: "var(--ep-topbar)" }}
      >
        <h1 className="font-mono text-4xl font-normal tracking-tight text-foreground sm:text-[48px]">
          Mis apuntes
        </h1>
        <div className="flex h-[55px] items-center gap-2 rounded-pill bg-ep-nav/87 px-4 sm:w-[360px]">
          <Search className="size-5 shrink-0 text-foreground/70" />
          <input
            type="search"
            placeholder="Buscar apunte"
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

        <div className="flex flex-col gap-4">
          {loading && (
            <p className="font-sans text-base text-muted-foreground">Cargando apuntes...</p>
          )}
          {!loading && filtered.length === 0 && (
            <p className="font-sans text-base text-muted-foreground">No hay apuntes para mostrar.</p>
          )}
          {filtered.map((apunte) => {
            const materiaColor = getMateriaColor(apunte.materia)

            return (
              <div
                key={apunte.id}
                className="flex items-center gap-4 rounded-nav border px-5"
                style={{
                  background: "var(--ep-task-card)",
                  borderColor: "var(--ep-card-border)",
                  minHeight: "119px",
                }}
              >
                <div className="flex size-12 shrink-0 items-center justify-center">
                  <FileText className="size-7 text-foreground/70" />
                </div>

                <span className="flex-1 font-mono text-2xl leading-snug">{apunte.titulo}</span>

                <span
                  className={`rounded-nav border px-5 py-2 font-mono text-2xl ${BADGE_CLASSES[materiaColor]}`}
                >
                  {apunte.materia}
                </span>

                <div className="flex gap-2">
                  <Link
                    to={`/app/apuntes/${apunte.id}`}
                    className="flex size-12 items-center justify-center rounded-[15px] transition-opacity hover:opacity-80"
                    style={{ background: "rgba(59,240,156,0.24)", border: "1px solid #000" }}
                    aria-label="Ver / editar apunte"
                  >
                    <Eye className="size-5" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDeleteApunte(apunte.id)}
                    className="flex size-12 items-center justify-center rounded-[15px] transition-opacity hover:opacity-80"
                    style={{ background: "transparent" }}
                    aria-label="Eliminar apunte"
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
            to="/app/apuntes/nuevo"
            className="inline-flex h-[68px] items-center rounded-[20px] px-6 font-mono text-2xl tracking-tight transition-opacity hover:opacity-90"
            style={{ background: "var(--ep-action-green)" }}
          >
            Nuevo apunte
          </Link>
        </div>
      </div>
    </div>
  )
}
