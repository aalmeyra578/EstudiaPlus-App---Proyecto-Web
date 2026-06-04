import { Link } from "react-router-dom"

/** Fallback route for unknown paths. */
export function NotFoundPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-mono text-4xl tracking-tight">404 — Página no encontrada</h1>
      <p className="text-muted-foreground">La ruta solicitada no existe en EstudiaPlus.</p>
      <Link to="/" className="text-ep-studia underline underline-offset-4">
        Volver al inicio
      </Link>
    </div>
  )
}
