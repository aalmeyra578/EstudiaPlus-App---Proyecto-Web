type BrandWordmarkProps = {
  /** Visual size: sidebar (mono 32), hero (mono 64), or compact header */
  size?: "sidebar" | "hero" | "header"
  className?: string
}

/**
 * Bicolor EstudiaPlus wordmark: "Estudia" #7050FF + "Plus" #6D0363, stroke #D31CC1
 */
export function BrandWordmark({ size = "sidebar", className = "" }: BrandWordmarkProps) {
  const textClass =
    size === "hero"
      ? "text-[64px] leading-none"
      : size === "header"
        ? "text-xl sm:text-2xl leading-tight"
        : "text-[32px] leading-tight"

  const strokeWidth = size === "header" ? "0.5px" : "1px"

  return (
    <span
      className={`inline-block font-mono font-normal ${textClass} ${className}`}
      style={{
        WebkitTextStroke: `${strokeWidth} var(--ep-brand-stroke)`,
        paintOrder: "stroke fill",
      }}
    >
      <span className="text-[var(--ep-brand-studia)]">Estudia</span>
      <span className="text-[var(--ep-brand-plus)]">Plus</span>
    </span>
  )
}
