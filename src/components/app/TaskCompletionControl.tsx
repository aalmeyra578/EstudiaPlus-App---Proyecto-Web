import { Check } from "lucide-react"
import * as Checkbox from "@radix-ui/react-checkbox"

interface TaskCompletionControlProps {
  title: string
  completed: boolean
  onToggle: () => void
}

export function TaskCompletionControl({ title, completed, onToggle }: TaskCompletionControlProps) {
  return (
    <>
      <Checkbox.Root
        checked={completed}
        onCheckedChange={onToggle}
        className="flex size-[70px] shrink-0 items-center justify-center rounded-lg border-2 border-foreground/20 bg-white/60 transition-colors data-[state=checked]:bg-ep-action-green"
        aria-label={`Marcar "${title}" como ${completed ? "pendiente" : "completada"}`}
      >
        <Checkbox.Indicator>
          <Check className="size-8 text-foreground" />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <span
        className="flex-1 font-mono text-2xl leading-snug"
        style={{
          textDecoration: completed ? "line-through" : "none",
          opacity: completed ? 0.5 : 1,
        }}
      >
        {title}
      </span>
    </>
  )
}
