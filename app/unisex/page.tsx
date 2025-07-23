import { Header } from "@/components/header"
import { ProductGrid } from "@/components/product-grid"
import { HeroSection } from "@/components/hero-section"
import { AnimatedBackground } from "@/components/animated-background"
import { Footer } from "@/components/footer"

export default function UnisexPage() {
  return (
    <div className="min-h-screen bg-jet transition-colors duration-300">
      <AnimatedBackground />
      <Header />
      <HeroSection
        title="UNISEX COLLECTION"
        subtitle="Discover our versatile collection for everyone"
        backgroundImage="/placeholder.svg?height=400&width=1200"
      />
      <ProductGrid filter="unisex" />
      <Footer />
    </div>
  )
}
