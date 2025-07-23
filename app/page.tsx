import { Header } from "@/components/header"
import { ProductGrid } from "@/components/product-grid"
import { AnimatedBackground } from "@/components/animated-background"
import HeroSlider from "@/components/hero-slider"
import CustomerReviews from "@/components/customer-reviews"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-baby-powder dark:bg-gray-900 transition-colors duration-300">
      <AnimatedBackground />
      <Header />
      <HeroSlider />
      <ProductGrid />
        {/*<CustomerReviews />*/}
      <Footer />
    </div>
  )
}
