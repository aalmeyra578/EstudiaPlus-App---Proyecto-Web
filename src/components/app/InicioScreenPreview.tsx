import { BrandWordmark } from "@/components/app/BrandWordmark"
import { PrototypeSidebar } from "@/components/app/PrototypeSidebar"

const HERO_IMG = "/images/inicio-hero.png"

/**
 * Pantalla de Inicio: sidebar, top bar, ilustración y marca (diseño Figma).
 */
export function InicioScreenPreview() {
  return (
    <div className="flex min-h-[min(100vh,1080px)] flex-col lg:flex-row">
      <PrototypeSidebar className="lg:w-[28.2%]" />

      <div className="flex min-h-[60vh] flex-1 flex-col bg-white lg:min-h-0">
        <div
          className="flex min-h-[122px] items-center border-b border-black/5 px-6 sm:px-10"
          style={{ background: "var(--ep-topbar)" }}
        >
          <h1 className="font-mono text-4xl font-normal tracking-tight text-foreground sm:text-[48px]">
            Inicio
          </h1>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-8">
          <div className="w-full max-w-[746px]">
            <div className="relative aspect-[746/470] w-full overflow-hidden rounded-3xl bg-[var(--ep-field)] shadow-inner">
              <img
                src={HERO_IMG}
                width={746}
                height={470}
                alt="Ilustración principal de la pantalla de inicio de EstudiaPlus"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="mt-[22px] flex justify-center">
              <BrandWordmark size="hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
