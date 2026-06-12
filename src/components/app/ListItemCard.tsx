import { cn } from "@/lib/utils"

interface ListItemCardProps {
  children: React.ReactNode
  className?: string
}

export function ListItemCard({ children, className }: ListItemCardProps) {
  return (
    <div
      className={cn("flex items-center gap-4 rounded-nav border px-5", className)}
      style={{
        background: "var(--ep-task-card)",
        borderColor: "var(--ep-card-border)",
        minHeight: "119px",
      }}
    >
      {children}
    </div>
  )
}
