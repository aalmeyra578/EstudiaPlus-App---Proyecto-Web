import { Link } from "react-router-dom"

type AppButtonVariant = "cta" | "action" | "cancel"

interface AppButtonProps {
  variant: AppButtonVariant
  label: string
  /** Optional Lucide icon component rendered before the label. */
  icon?: React.ComponentType<{ className?: string }>
  onClick?: () => void
  type?: "button" | "submit"
  disabled?: boolean
  loading?: boolean
  loadingLabel?: string
  /** When provided, renders a react-router <Link> instead of a <button>. */
  to?: string
  fullWidth?: boolean
}

const BASE_CLASSES =
  "inline-flex items-center justify-center font-mono text-2xl tracking-tight transition-opacity hover:opacity-90 disabled:opacity-50"

const VARIANT_CLASSES: Record<AppButtonVariant, string> = {
  cta: "h-[57px] rounded-pill w-full",
  action: "h-[68px] min-w-[212px] rounded-[20px] px-6",
  cancel: "h-[68px] min-w-[212px] rounded-[20px] px-6",
}

const VARIANT_BG: Record<AppButtonVariant, string> = {
  cta: "var(--ep-cta)",
  action: "var(--ep-action-green)",
  cancel: "var(--ep-cancel-red)",
}

export function AppButton({
  variant,
  label,
  icon: Icon,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  loadingLabel,
  to,
  fullWidth = false,
}: AppButtonProps) {
  const className = [
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    fullWidth ? "w-full" : "",
  ]
    .filter(Boolean)
    .join(" ")

  const style = { background: VARIANT_BG[variant] }

  const content = (
    <>
      {Icon && <Icon className="mr-2 size-5 shrink-0" />}
      {loading && loadingLabel ? loadingLabel : label}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={className} style={style}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={className}
      style={style}
    >
      {content}
    </button>
  )
}
