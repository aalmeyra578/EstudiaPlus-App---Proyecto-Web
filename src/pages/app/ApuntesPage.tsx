import { useEffect, useState } from "react"
import { FileText, Eye } from "lucide-react"

import { AppButton } from "@/components/app/AppButton"
import { ItemActionButtons } from "@/components/app/ItemActionButtons"
import { ListItemCard } from "@/components/app/ListItemCard"
import { ListSection } from "@/components/app/ListSection"
import { MateriaBadge } from "@/components/app/MateriaBadge"
import { PageSearchTopbar } from "@/components/app/PageSearchTopbar"
import { SectionContainer } from "@/components/app/SectionContainer"
import { StatusMessage } from "@/components/app/StatusMessage"
import { deleteApunte as deleteApunteApi, getApuntes } from "@/services/apuntes.service"
import type { Apunte } from "@/types/entities"

export function ApuntesPage() {
  const [apuntes, setApuntes] = useState<Apunte[]>([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getApuntes()
      .then(setApuntes)
      .catch((err) => {
        setError(err instanceof Error ? err.message : "No se pudieron cargar los apuntes.")
      })
      .finally(() => setLoading(false))
  }, [])

  const filtered = apuntes.filter((a) =>
    a.titulo.toLowerCase().includes(search.toLowerCase())
  )

  async function handleDeleteApunte(id: number) {
    try {
      await deleteApunteApi(id)
      setApuntes((prev) => prev.filter((a) => a.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo eliminar el apunte.")
    }
  }

  return (
    <div className="flex min-h-full flex-col bg-white">
      <PageSearchTopbar
        title="Mis apuntes"
        searchPlaceholder="Buscar apunte"
        searchValue={search}
        onSearchChange={setSearch}
      />

      <SectionContainer>
        <StatusMessage error={error} />

        <ListSection
          loading={loading}
          loadingText="Cargando apuntes..."
          isEmpty={!loading && filtered.length === 0}
          emptyText="No hay apuntes para mostrar."
        >
          {filtered.map((apunte) => {
            return (
              <ListItemCard key={apunte.id}>
                <div className="flex size-12 shrink-0 items-center justify-center">
                  <FileText className="size-7 text-foreground/70" />
                </div>

                <span className="flex-1 font-mono text-2xl leading-snug">{apunte.titulo}</span>

                <MateriaBadge materia={apunte.materia} />

                <ItemActionButtons
                  editTo={`/app/apuntes/${apunte.id}`}
                  editAriaLabel="Ver / editar apunte"
                  editIcon={Eye}
                  onDelete={() => handleDeleteApunte(apunte.id)}
                  deleteAriaLabel="Eliminar apunte"
                />
              </ListItemCard>
            )
          })}
        </ListSection>

        <div className="mt-auto">
          <AppButton variant="action" label="Nuevo apunte" to="/app/apuntes/nuevo" />
        </div>
      </SectionContainer>
    </div>
  )
}
