import { Search } from "lucide-react"

interface PageSearchTopbarProps {
  title: string
  searchPlaceholder: string
  searchValue: string
  onSearchChange: (value: string) => void
}

export function PageSearchTopbar({
  title,
  searchPlaceholder,
  searchValue,
  onSearchChange,
}: PageSearchTopbarProps) {
  return (
    <div
      className="flex min-h-[122px] items-center justify-between border-b border-black/5 px-6 sm:px-10"
      style={{ background: "var(--ep-topbar)" }}
    >
      <h1 className="font-mono text-4xl font-normal tracking-tight text-foreground sm:text-[48px]">
        {title}
      </h1>
      <div className="flex h-[55px] items-center gap-2 rounded-pill bg-ep-nav/87 px-4 sm:w-[360px]">
        <Search className="size-5 shrink-0 text-foreground/70" />
        <input
          type="search"
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex-1 bg-transparent font-mono text-xl text-foreground placeholder:text-foreground/60 focus:outline-none"
        />
      </div>
    </div>
  )
}
