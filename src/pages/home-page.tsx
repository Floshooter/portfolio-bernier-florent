import { FeaturedProjectsSection } from "@/components/home/featured-projects-section"
import { HeroSection } from "@/components/home/hero-section"
import { NowSection } from "@/components/home/now-section"
import { StatsSection } from "@/components/home/stats-section"

export function HomePage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <HeroSection />
      <NowSection />
      <StatsSection />
      <FeaturedProjectsSection />
    </div>
  )
}