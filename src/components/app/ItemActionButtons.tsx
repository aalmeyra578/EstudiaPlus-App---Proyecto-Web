import { Trash2 } from "lucide-react"
import { Link } from "react-router-dom"

interface ItemActionButtonsProps {
  editTo: string
  editAriaLabel: string
  onDelete: () => void
  deleteAriaLabel: string
  editIcon: React.ComponentType<{ className?: string }>
}

export function ItemActionButtons({
  editTo,
  editAriaLabel,
  onDelete,
  deleteAriaLabel,
  editIcon: EditIcon,
}: ItemActionButtonsProps) {
  return (
    <div className="flex gap-2">
      <Link
        to={editTo}
        className="flex size-12 items-center justify-center rounded-[15px] transition-opacity hover:opacity-80"
        style={{ background: "rgba(59,240,156,0.24)", border: "1px solid #000" }}
        aria-label={editAriaLabel}
      >
        <EditIcon className="size-5" />
      </Link>
      <button
        type="button"
        onClick={onDelete}
        className="flex size-12 items-center justify-center rounded-[15px] transition-opacity hover:opacity-80"
        style={{ background: "transparent" }}
        aria-label={deleteAriaLabel}
      >
        <Trash2 className="size-5" />
      </button>
    </div>
  )
}
