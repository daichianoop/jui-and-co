"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, ShoppingBag, Minus, Plus, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/cart-store"
import type { Product } from "@/lib/products"

interface ProductDetailsProps {
  product: Product
}

const ALL_SIZES = ["XS", "S", "M", "L", "XL", "XXL"]

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showDescription, setShowDescription] = useState(true)
  const [showDetails, setShowDetails] = useState(false)
  const { addItem } = useCartStore()

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
      })
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const isSizeAvailable = (size: string) => {
    return product.sizes.includes(size)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-8">
        {/* Image Carousel */}
        <div className="lg:col-span-5 space-y-3">
          <div className="relative aspect-[9/8] bg-baby-powder rounded-lg overflow-hidden">
            <Image
              src={product.images[currentImageIndex] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="h-4 w-4 text-black" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="h-4 w-4 text-black" />
            </button>
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                  currentImageIndex === index ? "border-moss-green" : "border-sage/30"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-4 space-y-4">
          <div>
            <h1 className="text-3xl font-mono text-baby-powder">
              {product.name} ({product.purchaseCount})
            </h1>
            <p className="text-sm font-mono text-sage mt-1">
              {product.category} • {product.print}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-semibold text-baby-powder">₹{product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-lg font-mono text-sage line-through">₹{product.originalPrice}</span>
                <span className="bg-redwood text-baby-powder px-2 py-1 rounded text-sm font-mono font-medium">
                  SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              </>
            )}
          </div>

          {/* Size Selection - All sizes in one line */}
          <div>
            <h3 className="text-sm font-mono text-baby-powder mb-2">SIZE: {selectedSize}</h3>
            <div className="flex gap-2 flex-wrap">
              {ALL_SIZES.map((size) => {
                const isAvailable = isSizeAvailable(size)
                const isSelected = selectedSize === size

                return (
                  <button
                    key={size}
                    onClick={() => isAvailable && setSelectedSize(size)}
                    disabled={!isAvailable}
                    className={`relative px-3 py-2 text-sm font-mono border rounded transition-all duration-300 min-w-[2.5rem] ${
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
          </div>

          {/* Quantity */}
          <div>
            <h3 className="text-sm font-mono text-baby-powder mb-2">QUANTITY</h3>
            <div className="flex items-center border border-sage rounded w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-sage/10 text-baby-powder"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-2 font-mono font-medium min-w-[3rem] text-center text-baby-powder">
                {quantity}
              </span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-sage/10 text-baby-powder">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleAddToCart}
              className="flex-1 bg-moss-green hover:bg-moss-green/90 text-baby-powder py-2.5 font-mono font-medium"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              ADD TO CART
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-moss-green text-moss-green hover:bg-moss-green hover:text-baby-powder bg-transparent px-3"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          {/* Product Description */}
          <div className="space-y-3 border-t border-sage/30 pt-4">
            <button
              onClick={() => setShowDescription(!showDescription)}
              className="flex items-center justify-between w-full text-left text-base font-mono font-medium text-baby-powder"
            >
              Description
              <span className={`transform transition-transform text-sm ${showDescription ? "rotate-180" : ""}`}>▼</span>
            </button>
            {showDescription && (
              <div className="text-sm font-mono text-sage leading-relaxed">{product.description}</div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-3">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center justify-between w-full text-left text-base font-mono font-medium text-baby-powder"
            >
              Product Details
              <span className={`transform transition-transform text-sm ${showDetails ? "rotate-180" : ""}`}>▼</span>
            </button>
            {showDetails && (
              <div className="space-y-1.5 text-sm font-mono text-sage">
                <p>
                  <strong>Composition:</strong> {product.details.composition}
                </p>
                <p>
                  <strong>GSM:</strong> {product.details.gsm}
                </p>
                <p>
                  <strong>Color:</strong> {product.details.color}
                </p>
                <p>
                  <strong>Country of Production:</strong> {product.details.countryOfProduction}
                </p>
                <p>
                  <strong>Wash Care:</strong> {product.details.washCare}
                </p>
                <p>
                  <strong>Sizing:</strong> {product.details.sizing}
                </p>
                <p>
                  <strong>Fit:</strong> {product.details.fit}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
