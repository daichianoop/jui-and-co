"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, ShoppingBag, Eye, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/cart-store"
import { products, type Product } from "@/lib/products"
import { useRouter } from "next/navigation"

interface ProductGridProps {
  filter?: string
}

const ALL_SIZES = ["XS", "S", "M", "L", "XL", "XXL"]

export function ProductGrid({ filter }: ProductGridProps) {
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({})
  const { addItem } = useCartStore()
  const router = useRouter()

  // Filter products based on the filter prop
  const filteredProducts = filter
    ? products.filter((product) => {
        if (filter === "men" || filter === "women" || filter === "unisex") {
          return product.gender === filter
        }
        if (filter === "new-arrivals") {
          return product.type === "new-arrivals"
        }
        if (filter === "bestsellers") {
          return product.type === "bestseller"
        }
        if (filter === "premium-prints") {
          return product.print.toLowerCase().includes("premium") || product.category === "PREMIUM"
        }
        if (filter === "daily-wear") {
          return product.print.toLowerCase().includes("daily") || product.type === "regular"
        }
        return true
      })
    : products

  const handleAddToCart = (product: Product) => {
    const size = selectedSizes[product.id] || "M"
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

  const getTitle = () => {
    if (filter === "men") return "Men&#39;s Collection"
    if (filter === "women") return "Women&#39;s Collection"
    if (filter === "unisex") return "Unisex Collection"
    if (filter === "new-arrivals") return "New Arrivals"
    if (filter === "bestsellers") return "Best Sellers"
    if (filter === "premium-prints") return "Premium Prints"
    if (filter === "daily-wear") return "Daily Wear"
    return "All Products"
  }

  const getDescription = () => {
    if (filter === "men") return "Discover our latest men&#39;s fashion pieces"
    if (filter === "women") return "Explore our elegant women&#39;s collection"
    if (filter === "unisex") return "Versatile styles for everyone"
    if (filter === "new-arrivals") return "Fresh styles just landed"
    if (filter === "bestsellers") return "Our most popular items"
    if (filter === "premium-prints") return "Exclusive designs for the discerning fashion lover"
    if (filter === "daily-wear") return "Comfortable styles for everyday elegance"
    return "Discover our complete collection"
  }

  return (
    <div className="w-full p-6 sm:p-8 bg-jet">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-baby-powder font-mono">{getTitle()}</h1>
          <p className="text-baby-powder/80 font-mono text-lg">{getDescription()}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product, index) => (
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
                  <p className="text-sm text-baby-powder/70 font-mono">
                    {product.category} • {product.print}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-lg text-baby-powder font-mono">₹{product.price}</p>
                    {product.originalPrice && (
                      <p className="text-sm text-baby-powder/60 line-through font-mono">₹{product.originalPrice}</p>
                    )}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="flex gap-2 flex-wrap">
                  {ALL_SIZES.map((size) => {
                    const isAvailable = product.sizes.includes(size)
                    const isSelected = selectedSizes[product.id] === size

                    return (
                      <button
                        key={size}
                        onClick={() => isAvailable && handleSizeSelect(product.id, size)}
                        disabled={!isAvailable}
                        className={`relative px-3 py-1 text-sm border rounded transition-all duration-300 min-w-[2rem] font-mono ${
                          isSelected && isAvailable
                            ? "bg-moss-green text-baby-powder border-moss-green"
                            : isAvailable
                              ? "border-baby-powder/30 hover:border-moss-green text-baby-powder"
                              : "border-baby-powder/20 text-baby-powder/40 cursor-not-allowed"
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
                    className="w-full border-baby-powder text-baby-powder hover:bg-baby-powder hover:text-jet transition-all duration-300 bg-transparent font-mono"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View Product
                  </Button>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    size="sm"
                    className="w-full bg-moss-green hover:bg-moss-green/90 text-baby-powder transition-all duration-300 hover:scale-105 font-mono"
                  >
                    <ShoppingBag className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
