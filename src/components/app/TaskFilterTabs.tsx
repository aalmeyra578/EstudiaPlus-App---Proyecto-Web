export type TaskFilterTab = "todas" | "pendientes" | "completadas"

interface TaskFilterTabsProps {
  activeTab: TaskFilterTab
  onChange: (tab: TaskFilterTab) => void
}

const FILTER_TABS: { key: TaskFilterTab; label: string }[] = [
  { key: "todas", label: "Todas" },
  { key: "pendientes", label: "Pendientes" },
  { key: "completadas", label: "Completadas" },
]

export function TaskFilterTabs({ activeTab, onChange }: TaskFilterTabsProps) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {FILTER_TABS.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className="h-[55px] min-w-[120px] rounded-nav border px-5 font-sans text-[32px] leading-none transition-colors"
          style={{
            background: activeTab === key ? "var(--ep-task-card)" : "transparent",
            borderColor: activeTab === key ? "var(--ep-card-border)" : "transparent",
          }}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
