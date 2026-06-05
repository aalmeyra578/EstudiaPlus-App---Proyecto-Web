import { ComponentShowcase } from "@/components/landing/ComponentShowcase"

/** Component library showcase page (root route). */
export function LandingPage() {
  return (
    <div className="min-h-svh bg-background">
      <main>
        <ComponentShowcase />
      </main>
    </div>
  )
}
