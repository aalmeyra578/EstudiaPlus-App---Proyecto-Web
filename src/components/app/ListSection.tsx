import type { ReactNode } from "react"

import { StatusMessage } from "@/components/app/StatusMessage"

interface ListSectionProps {
  loading: boolean
  loadingText: string
  isEmpty: boolean
  emptyText: string
  children: ReactNode
}

export function ListSection({
  loading,
  loadingText,
  isEmpty,
  emptyText,
  children,
}: ListSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Handles loading/empty visual states in one place. */}
      <StatusMessage
        loading={loading}
        loadingText={loadingText}
        isEmpty={isEmpty}
        emptyText={emptyText}
      />
      {children}
    </div>
  )
}
