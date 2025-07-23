import { Header } from "@/components/header"
import { ProductGrid } from "@/components/product-grid"
import { HeroSection } from "@/components/hero-section"
import { AnimatedBackground } from "@/components/animated-background"
import { Footer } from "@/components/footer"

export default function NewArrivalsPage() {
  return (
    <div className="min-h-screen bg-jet transition-colors duration-300">
      <AnimatedBackground />
      <Header />
      <HeroSection
        title="NEW ARRIVALS"
        subtitle="Fresh styles just landed - be the first to wear them"
        backgroundImage="/placeholder.svg?height=400&width=1200"
      />
      <ProductGrid filter="new-arrivals" />
      <Footer />
    </div>
  )
}
