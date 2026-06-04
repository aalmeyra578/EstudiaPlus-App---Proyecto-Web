import { ComponentShowcase } from "@/components/landing/ComponentShowcase"
import { FaqSection } from "@/components/landing/FaqSection"
import { FeaturesSection } from "@/components/landing/FeaturesSection"
import { HeroSection } from "@/components/landing/HeroSection"
import { SiteFooter } from "@/components/landing/SiteFooter"
import { SiteHeader } from "@/components/landing/SiteHeader"

/** Public marketing landing (AO2 content). */
export function LandingPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <FaqSection />
        <ComponentShowcase />
      </main>
      <SiteFooter />
    </div>
  )
}
