import { HeroSection } from "@/components/landing/HeroSection"
import { FeaturesSection } from "@/components/landing/FeaturesSection"
import { FaqSection } from "@/components/landing/FaqSection"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { SiteFooter } from "@/components/landing/SiteFooter"

export function LandingPage() {
  return (
    <div className="min-h-svh bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}
