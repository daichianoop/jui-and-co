"use client"

import { useEffect } from "react"
import { notFound } from "next/navigation"
import { getProductById, getRelatedProducts } from "@/lib/products"
import { Header } from "@/components/header"
import { AnimatedBackground } from "@/components/animated-background"
import { ProductDetails } from "@/components/product-details"
import { RelatedProducts } from "@/components/related-products"
import { Footer } from "@/components/footer"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)

  // Force scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [params.id])

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(params.id)

  return (
    <div className="min-h-screen bg-jet transition-colors duration-300">
      <AnimatedBackground />
      <Header />
      <ProductDetails product={product} />
      <RelatedProducts products={relatedProducts} />
      <Footer />
    </div>
  )
}
