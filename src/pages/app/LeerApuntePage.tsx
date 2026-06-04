import { useParams } from "react-router-dom"

/** Read note screen placeholder; reads dynamic note id from the URL. */
export function LeerApuntePage() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="flex min-h-full flex-col bg-white">
      <div
        className="flex min-h-[122px] items-center border-b border-black/5 px-6 sm:px-10"
        style={{ background: "var(--ep-topbar)" }}
      >
        <h1 className="font-mono text-4xl font-normal tracking-tight text-foreground sm:text-[48px]">
          Leer apunte — ID: {id}
        </h1>
      </div>
    </div>
  )
}
