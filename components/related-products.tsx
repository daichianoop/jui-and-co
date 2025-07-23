"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, ShoppingBag, Eye, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/cart-store"
import type { Product } from "@/lib/products"
import { useRouter } from "next/navigation"

interface RelatedProductsProps {
  products: Product[]
}

const ALL_SIZES = ["XS", "S", "M", "L", "XL", "XXL"]

export function RelatedProducts({ products }: RelatedProductsProps) {
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({})
  const { addItem } = useCartStore()
  const router = useRouter()

  const handleAddToCart = (product: Product) => {
    const size = selectedSizes[product.id] || product.sizes[0]
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size,
    })
  }

  const handleSizeSelect = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }))
  }

  const handleViewProduct = (productId: string) => {
    window.scrollTo(0, 0)
    router.push(`/product/${productId}`)
  }

  if (products.length === 0) return null

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-jet">
      <div className="mb-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-baby-powder mb-4 font-mono">COMPLETE THE LOOK</h2>
        <p className="text-baby-powder/80 font-mono text-lg">Style these pieces together for the perfect outfit</p>
      </div>

      {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="group animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative overflow-hidden rounded-lg bg-baby-powder aspect-[4/5] mb-4">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-baby-powder/80 backdrop-blur-sm hover:bg-baby-powder"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              {product.originalPrice && (
                <div className="absolute top-4 left-4">
                  <span className="bg-redwood text-baby-powder text-sm px-3 py-2 rounded-md font-bold shadow-lg font-mono">
                    SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="font-medium text-base text-baby-powder font-mono tracking-wide">
                  {product.name} ({product.purchaseCount})
                </h3>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-lg text-baby-powder font-mono">₹{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-sm text-baby-powder/60 line-through font-mono">₹{product.originalPrice}</p>
                  )}
                </div>
              </div>

              {/* Size Selection */}
              <div className="flex gap-1 flex-wrap">
                {ALL_SIZES.slice(0, 4).map((size) => {
                  const isAvailable = product.sizes.includes(size)
                  const isSelected = selectedSizes[product.id] === size

                  return (
                    <button
                      key={size}
                      onClick={() => isAvailable && handleSizeSelect(product.id, size)}
                      disabled={!isAvailable}
                      className={`relative px-2 py-1 text-xs border rounded transition-all duration-300 min-w-[1.75rem] font-mono ${
                        isSelected && isAvailable
                          ? "bg-moss-green text-baby-powder border-moss-green"
                          : isAvailable
                            ? "border-sage hover:border-moss-green text-baby-powder"
                            : "border-sage/30 text-sage/50 cursor-not-allowed"
                      }`}
                    >
                      {size}
                      {!isAvailable && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <X className="h-3 w-3 text-redwood" />
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Stacked Buttons */}
              <div className="space-y-2">
                <Button
                  onClick={() => handleViewProduct(product.id)}
                  variant="outline"
                  size="sm"
                  className="w-full border-moss-green text-moss-green hover:bg-moss-green hover:text-baby-powder transition-all duration-300 bg-transparent font-mono"
                >
                  <Eye className="h-3 w-3 mr-1" />
                  View
                </Button>
                <Button
                  onClick={() => handleAddToCart(product)}
                  size="sm"
                  className="w-full bg-moss-green hover:bg-moss-green/90 text-baby-powder transition-all duration-300 font-mono"
                >
                  <ShoppingBag className="h-3 w-3 mr-1" />
                  Add
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
