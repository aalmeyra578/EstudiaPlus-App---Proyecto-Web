interface StatusMessageProps {
  loading?: boolean
  loadingText?: string
  isEmpty?: boolean
  emptyText?: string
  error?: string | null
  /** Wraps the message in a centered full-page container (used in edit pages). */
  fullPage?: boolean
  /** "sm" renders text-sm text-foreground/50; "base" (default) renders text-base text-muted-foreground. */
  size?: "base" | "sm"
}

/** Renders a single status message for loading, empty, or error states.
 *  Returns null when no condition is active. Priority: loading → error → isEmpty. */
export function StatusMessage({
  loading,
  loadingText = "Cargando...",
  isEmpty,
  emptyText = "No hay resultados.",
  error,
  fullPage = false,
  size = "base",
}: StatusMessageProps) {
  let text: string | null = null
  let isError = false

  if (loading) {
    text = loadingText
  } else if (error) {
    text = error
    isError = true
  } else if (isEmpty) {
    text = emptyText
  }

  if (!text) return null

  const textClass =
    size === "sm"
      ? "font-sans text-sm text-foreground/50"
      : isError
        ? "font-sans text-base text-red-600"
        : "font-sans text-base text-muted-foreground"

  const p = (
    <p className={textClass} role={isError ? "alert" : undefined}>
      {text}
    </p>
  )

  if (fullPage) {
    return (
      <div className="flex min-h-full items-center justify-center bg-white px-6">{p}</div>
    )
  }

  return p
}
