import type { ReactNode } from "react"
import { BookOpen, CalendarCheck2, CalendarDays, Home, ListTodo, LogOut, User } from "lucide-react"

import { BrandWordmark } from "@/components/app/BrandWordmark"
import { cn } from "@/lib/utils"

type NavRowProps = {
  icon: ReactNode
  label: string
  active?: boolean
  /** Profile row (Agustin) — semi-transparent white background */
  user?: boolean
}

function NavRow({ icon, label, active, user }: NavRowProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[110px] items-center gap-4 rounded-nav pl-5 pr-4 transition-colors duration-200",
        user && "min-h-[110px] bg-[var(--ep-user-row)]",
        !user && active && "bg-ep-active",
        !user && !active && "bg-ep-nav"
      )}
    >
      <div className="flex size-[54px] shrink-0 items-center justify-center rounded-full bg-white/80 text-foreground shadow-sm">
        {icon}
      </div>
      <span className="font-mono text-[32px] leading-tight tracking-tight text-foreground">{label}</span>
    </div>
  )
}

/**
 * Left column of the Inicio screen: vertical gradient and navigation pills.
 */
export function PrototypeSidebar({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "flex w-full max-w-sidebar shrink-0 flex-col px-6 pb-10 pt-6 text-foreground lg:px-8",
        className
      )}
      style={{ background: "var(--ep-sidebar-gradient)" }}
    >
      <div className="mb-8 flex items-center gap-3 pl-1">
        <div
          className="flex h-[53px] w-[84px] shrink-0 items-center justify-center rounded-lg shadow-inner"
          style={{ background: "var(--ep-logo-tile)" }}
        >
          <CalendarCheck2 className="size-8 text-ep-studia" aria-hidden />
        </div>
        <BrandWordmark size="sidebar" />
      </div>

      <NavRow user icon={<User className="size-7" aria-hidden />} label="Agustin" />
      <div className="mt-3 space-y-3">
        <NavRow icon={<Home className="size-7" aria-hidden />} label="Inicio" active />
        <NavRow icon={<ListTodo className="size-7" aria-hidden />} label="Tareas" />
        <NavRow icon={<CalendarDays className="size-7" aria-hidden />} label="Calendario" />
        <NavRow icon={<BookOpen className="size-7" aria-hidden />} label="Apuntes" />
        <NavRow icon={<LogOut className="size-7" aria-hidden />} label="Cerrar sesión" />
      </div>
    </aside>
  )
}
