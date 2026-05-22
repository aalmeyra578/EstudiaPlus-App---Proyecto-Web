import { ArrowUpToLine, LayoutGrid } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-gradient-to-r from-cyan-50 via-white to-violet-50 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-muted-foreground">
            © {new Date().getFullYear()} EstudiaPlus · Landing y design system
          </p>
          <p className="mt-1 font-sans text-xs text-muted-foreground">
            Agustín Gabriel Almeyra Torres · Kevin Gabriel Ojea
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 font-sans text-sm">
          <a
            className="inline-flex items-center gap-1.5 text-[var(--ep-link)] transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ep-link)]"
            href="#hero"
          >
            <ArrowUpToLine className="size-4 shrink-0" aria-hidden strokeWidth={2} />
            Arriba
          </a>
          <a
            className="inline-flex items-center gap-1.5 text-[var(--ep-link)] transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ep-link)]"
            href="#showcase"
          >
            <LayoutGrid className="size-4 shrink-0" aria-hidden strokeWidth={2} />
            Componentes
          </a>
        </div>
      </div>
    </footer>
  )
}
