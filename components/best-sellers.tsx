"use client"

import Image from "next/image"
import { Heart, ShoppingBag, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/cart-store"
import { useState } from "react"
import { useRouter } from "next/navigation"

const bestSellers = [
  {
    id: "1",
    name: "Sage Comfort Tee",
    price: 1299,
    originalPrice: 1599,
    image: "/prod/1.jpeg",
    category: "TOPS",
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Moss Green Co-ord Set",
    price: 2499,
    originalPrice: 2999,
    image: "/prod/1.jpeg",
    category: "CO-ORD SETS",
    badge: "Trending",
  },
  {
    id: "3",
    name: "Baby Powder Dress",
    price: 1899,
    originalPrice: 2299,
    image: "/prod/1.jpeg",
    category: "DRESSES",
    badge: "Popular",
  },
  {
    id: "4",
    name: "Sage Summer Shorts",
    price: 999,
    originalPrice: 1299,
    image: "/prod/1.jpeg",
    category: "BOTTOMS",
    badge: "Hot Deal",
  },
]

const ALL_SIZES = ["XS", "S", "M", "L", "XL", "XXL"]

export function BestSellers() {
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({})
  const { addItem } = useCartStore()
  const router = useRouter()

  const handleAddToCart = (product: (typeof bestSellers)[0]) => {
    const size = selectedSizes[product.id] || "M"
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
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

  return (
    <section className="py-16 bg-sage transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl font-bold text-jet mb-4 font-mono">Best Sellers</h2>
          <p className="text-jet/80 max-w-2xl mx-auto font-mono">
            Discover our most loved pieces that customers can&#39;t get enough of
          </p>
        </div>

        {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {bestSellers.map((product, index) => (
            <div
              key={product.id}
              className="group animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg bg-baby-powder aspect-[4/5] mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-redwood text-baby-powder text-sm px-3 py-2 rounded-md font-bold shadow-lg font-mono">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-baby-powder/80 backdrop-blur-sm hover:bg-baby-powder"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-lg text-jet font-mono">{product.name}</h3>
                  <p className="text-sm text-jet/70 font-mono">{product.category}</p>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-lg text-jet font-mono">₹{product.price}</p>
                    <p className="text-sm text-jet/60 line-through font-mono">₹{product.originalPrice}</p>
                    <span className="bg-redwood text-baby-powder text-xs px-2 py-1 rounded-md font-bold font-mono">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                </div>

                {/* Size Selection */}
                <div className="flex gap-1 flex-wrap">
                  {ALL_SIZES.slice(0, 4).map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(product.id, size)}
                      className={`px-2 py-1 text-xs border rounded transition-all duration-300 font-mono min-w-[1.75rem] ${
                        selectedSizes[product.id] === size
                          ? "bg-moss-green text-baby-powder border-moss-green"
                          : "border-jet/30 hover:border-moss-green text-jet"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Stacked Buttons */}
                <div className="space-y-2">
                  <Button
                    onClick={() => handleViewProduct(product.id)}
                    variant="outline"
                    size="sm"
                    className="w-full border-jet text-jet hover:bg-jet hover:text-baby-powder transition-all duration-300 bg-transparent font-mono"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View
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
    </section>
  )
}
