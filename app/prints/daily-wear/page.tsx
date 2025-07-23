import { Header } from "@/components/header"
import { ProductGrid } from "@/components/product-grid"
import { HeroSection } from "@/components/hero-section"
import { AnimatedBackground } from "@/components/animated-background"
import { Footer } from "@/components/footer"

export default function DailyWearPage() {
  return (
    <div className="min-h-screen bg-jet transition-colors duration-300">
      <AnimatedBackground />
      <Header />
      <HeroSection
        title="DAILY WEAR"
        subtitle="Comfortable styles for everyday elegance"
        backgroundImage="/placeholder.svg?height=400&width=1200"
      />
      <ProductGrid filter="daily-wear" />
      <Footer />
    </div>
  )
}
