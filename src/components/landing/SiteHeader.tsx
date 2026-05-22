import { LayoutDashboard } from "lucide-react"

import { BrandWordmark } from "@/components/app/BrandWordmark"
import { Button } from "@/components/ui/button"

const nav = [
  { label: "Inicio", href: "#hero" },
  { label: "Características", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Componentes", href: "#showcase" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#hero"
          className="shrink-0 outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--ep-link)] focus-visible:ring-offset-2"
        >
          <BrandWordmark size="header" />
        </a>
        <nav className="hidden items-center gap-5 md:flex" aria-label="Secciones landing">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-sm font-medium text-[var(--ep-link)] underline-offset-4 transition-colors hover:text-[var(--ep-link)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ep-link)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Button
            size="sm"
            className="rounded-pill bg-[var(--ep-cta)] font-mono text-black hover:bg-[var(--ep-cta)]"
            asChild
          >
            <a href="#hero" className="inline-flex items-center gap-2">
              <LayoutDashboard className="size-4 shrink-0" aria-hidden strokeWidth={2} />
              Vista inicio
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
