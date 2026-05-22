import { BookOpen, CalendarDays, ListTodo, Shield } from "lucide-react"

const features = [
  {
    icon: ListTodo,
    title: "Mis tareas",
    description:
      "Listado con buscador y filtros (todas, pendientes, completadas), más flujos de alta y edición de tareas previstos en el producto.",
  },
  {
    icon: CalendarDays,
    title: "Calendario",
    description:
      "Vista mensual para ubicar fechas y tareas pendientes, con panel de detalle por categoría.",
  },
  {
    icon: BookOpen,
    title: "Apuntes",
    description:
      "Listado, alta y lectura de apuntes en un solo lugar.",
  },
  {
    icon: Shield,
    title: "Cuenta",
    description:
      "Login, registro con validación de contraseña y recuperación de acceso, con los mismos colores de campo y CTA del diseño.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-20 bg-[var(--ep-topbar)] px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Características del producto
          </h2>
          <p className="mt-4 font-sans text-muted-foreground">
            Módulos principales de EstudiaPlus.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <li
              key={f.title}
              className="flex min-h-[120px] flex-col gap-3 rounded-nav border border-black/5 bg-ep-nav p-5 shadow-sm transition-shadow duration-200 hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-white/90 text-ep-studia shadow-inner">
                <f.icon className="size-5" aria-hidden />
              </div>
              <h3 className="font-mono text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
