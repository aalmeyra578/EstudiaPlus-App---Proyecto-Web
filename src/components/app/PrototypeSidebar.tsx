import type { ReactNode } from "react"
import { Link, useLocation } from "react-router-dom"
import { BookOpen, CalendarDays, Home, ListTodo, LogOut, User } from "lucide-react"

import { BrandWordmark } from "@/components/app/BrandWordmark"
import { cn, HERO_IMAGE_PATH } from "@/lib/utils"

type NavRowProps = {
  icon: ReactNode
  label: string
  to?: string
  active?: boolean
  /** Profile row (Agustin) — semi-transparent white background */
  user?: boolean
}

function NavRow({ icon, label, to, active, user }: NavRowProps) {
  const content = (
    <>
      <div className="flex size-[54px] shrink-0 items-center justify-center rounded-full bg-white/80 text-foreground shadow-sm">
        {icon}
      </div>
      <span className="font-mono text-[32px] leading-tight tracking-tight text-foreground">{label}</span>
    </>
  )

  const className = cn(
    "relative flex min-h-[110px] items-center gap-4 rounded-nav pl-5 pr-4 transition-colors duration-200",
    user && "min-h-[110px] bg-[var(--ep-user-row)]",
    !user && active && "bg-ep-active",
    !user && !active && "bg-ep-nav",
    to && "hover:opacity-95"
  )

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    )
  }

  return <div className={className}>{content}</div>
}

const NAV_ITEMS = [
  { to: "/app/inicio", icon: Home, label: "Inicio", match: (path: string) => path === "/app/inicio" },
  {
    to: "/app/tareas",
    icon: ListTodo,
    label: "Tareas",
    match: (path: string) => path.startsWith("/app/tareas"),
  },
  {
    to: "/app/calendario",
    icon: CalendarDays,
    label: "Calendario",
    match: (path: string) => path.startsWith("/app/calendario"),
  },
  {
    to: "/app/apuntes",
    icon: BookOpen,
    label: "Apuntes",
    match: (path: string) => path.startsWith("/app/apuntes"),
  },
] as const

/**
 * Left column of the app shell: vertical gradient and navigation pills.
 */
export function PrototypeSidebar({ className }: { className?: string }) {
  const { pathname } = useLocation()

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
          className="h-[53px] w-[84px] shrink-0 overflow-hidden rounded-lg shadow-inner"
          style={{ background: "var(--ep-logo-tile)" }}
        >
          <img
            src={HERO_IMAGE_PATH}
            alt="Logo de EstudiaPlus"
            className="h-full w-full object-cover"
            width={84}
            height={53}
            loading="eager"
            decoding="async"
          />
        </div>
        <BrandWordmark size="sidebar" />
      </div>

      <NavRow user icon={<User className="size-7" aria-hidden />} label="Agustin" />
      <div className="mt-3 space-y-3">
        {NAV_ITEMS.map(({ to, icon: Icon, label, match }) => (
          <NavRow
            key={to}
            to={to}
            icon={<Icon className="size-7" aria-hidden />}
            label={label}
            active={match(pathname)}
          />
        ))}
        <NavRow to="/login" icon={<LogOut className="size-7" aria-hidden />} label="Cerrar sesión" />
      </div>
    </aside>
  )
}
