import { Outlet } from "react-router-dom"

import { PrototypeSidebar } from "@/components/app/PrototypeSidebar"

/** Authenticated app shell: sidebar navigation + nested route outlet. */
export function AppLayout() {
  return (
    <div className="flex min-h-svh flex-col lg:flex-row">
      <PrototypeSidebar className="lg:w-[28.2%]" />
      <div className="flex min-h-0 flex-1 flex-col">
        <Outlet />
      </div>
    </div>
  )
}
