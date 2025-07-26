import { Header } from "@/components/header"
import { ProductGrid } from "@/components/product-grid"
import { HeroSection } from "@/components/hero-section"
import { AnimatedBackground } from "@/components/animated-background"
import { Footer } from "@/components/footer"

export default function MenPage() {
  return (
    <div className="min-h-screen bg-jet transition-colors duration-300">
      <AnimatedBackground />
      <Header />
      <HeroSection
        title="MEN&#39;S COLLECTION"
        subtitle="Discover our premium collection for men"
        backgroundImage="/placeholder.svg?height=400&width=1200"
      />
      <ProductGrid filter="men" />
      <Footer />
    </div>
  )
}
