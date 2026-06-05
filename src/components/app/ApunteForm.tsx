import { useNavigate } from "react-router-dom"

type Props = {
  title: string
  saveLabel: string
  defaultTitulo?: string
  defaultContenido?: string
}

export function ApunteForm({ title, saveLabel, defaultTitulo = "", defaultContenido = "" }: Props) {
  const navigate = useNavigate()

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
        {/* Título del apunte */}
        <div className="flex flex-col gap-1">
          <label className="font-sans text-2xl" htmlFor="note-title">
            Título del apunte
          </label>
          <input
            id="note-title"
            type="text"
            defaultValue={defaultTitulo}
            className="h-[70px] w-full rounded-field border border-ep-card-border bg-white px-5 font-mono text-[32px] tracking-tight text-foreground focus:outline-none focus:ring-2 focus:ring-ep-cta"
          />
        </div>

        {/* Apunte textarea */}
        <div className="flex flex-1 flex-col gap-1">
          <label className="font-semibold font-sans text-2xl" htmlFor="note-content">
            Apunte
          </label>
          <textarea
            id="note-content"
            defaultValue={defaultContenido}
            className="min-h-[400px] flex-1 w-full rounded-lg border border-ep-card-border bg-white px-5 py-4 font-sans text-2xl font-normal text-foreground focus:outline-none focus:ring-2 focus:ring-ep-cta lg:min-h-[635px]"
          />
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-4">
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
