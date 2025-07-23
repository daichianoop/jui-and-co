import { Header } from "@/components/header"
import { ProductGrid } from "@/components/product-grid"
import { HeroSection } from "@/components/hero-section"
import { AnimatedBackground } from "@/components/animated-background"
import { Footer } from "@/components/footer"

export default function PremiumPrintsPage() {
  return (
    <div className="min-h-screen bg-jet transition-colors duration-300">
      <AnimatedBackground />
      <Header />
      <HeroSection
        title="PREMIUM PRINTS"
        subtitle="Exclusive designs for the discerning fashion lover"
        backgroundImage="/placeholder.svg?height=400&width=1200"
      />
      <ProductGrid filter="premium-prints" />
      <Footer />
    </div>
  )
}
