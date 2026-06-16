import type { ReactNode } from "react"

interface SectionContainerProps {
  children: ReactNode
}

export function SectionContainer({ children }: SectionContainerProps) {
  return <div className="flex flex-1 flex-col gap-6 px-6 py-6 sm:px-10">{children}</div>
}
