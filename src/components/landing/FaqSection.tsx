import { ChevronDown } from "lucide-react"

const items = [
  {
    q: "¿Puedo editar tareas?",
    a: "Sí. El producto contempla listado, alta, edición y cambio de estado (pendiente o completada).",
  },
  {
    q: "¿La aplicación incluye calendario?",
    a: "Sí. Hay una vista mensual para ver fechas y tareas pendientes.",
  },
  {
    q: "¿Qué son los apuntes?",
    a: "Un módulo para listar, crear y leer notas de estudio desde la misma app.",
  },
  {
    q: "¿Cómo accedo a mi cuenta?",
    a: "Con login por correo, registro de usuario y recuperación de contraseña.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 border-y border-black/10 bg-white px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Preguntas frecuentes
        </h2>
        <div className="mt-10 space-y-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-nav border border-black/10 bg-ep-nav px-4 py-3 shadow-sm transition-all duration-200 open:border-primary/40 open:bg-ep-active open:shadow-md"
            >
              <summary className="cursor-pointer list-none font-mono font-medium text-foreground outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <ChevronDown
                    className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                    strokeWidth={2}
                  />
                </span>
              </summary>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
