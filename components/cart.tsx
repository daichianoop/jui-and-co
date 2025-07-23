"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/cart-store"
import { Checkout } from "./checkout"
import { Input } from "@/components/ui/input"

interface Coupon {
  code: string
  type: "percentage" | "free_delivery"
  value: number
  description: string
}

const availableCoupons: Coupon[] = [
  {
    code: "NEW10",
    type: "percentage",
    value: 10,
    description: "10% off on your order",
  },
  {
    code: "PARTY20",
    type: "percentage",
    value: 20,
    description: "20% off on your order",
  },
  {
    code: "FREEDEL",
    type: "free_delivery",
    value: 0,
    description: "Free delivery on your order",
  },
]

export function Cart() {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, getTotalPrice } = useCartStore()
  const [showCheckout, setShowCheckout] = useState(false)

  const [couponCode, setCouponCode] = useState("")
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null)
  const [couponError, setCouponError] = useState("")

  if (!isOpen) return null

  const shipping = getTotalPrice() > 1500 ? 0 : 99
  const tax = Math.round(getTotalPrice() * 0.18)

  const applyCoupon = () => {
    setCouponError("")
    const coupon = availableCoupons.find((c) => c.code.toLowerCase() === couponCode.toLowerCase())

    if (!coupon) {
      setCouponError("Invalid coupon code")
      return
    }

    if (appliedCoupon?.code === coupon.code) {
      setCouponError("Coupon already applied")
      return
    }

    setAppliedCoupon(coupon)
    setCouponCode("")
  }

  const removeCoupon = () => {
    setAppliedCoupon(null)
    setCouponError("")
  }

  // Calculate discount
  let discount = 0
  let freeDelivery = false

  if (appliedCoupon) {
    if (appliedCoupon.type === "percentage") {
      discount = Math.round(getTotalPrice() * (appliedCoupon.value / 100))
    } else if (appliedCoupon.type === "free_delivery") {
      freeDelivery = true
    }
  }

  const finalShipping = freeDelivery ? 0 : shipping
  const finalTotal = getTotalPrice() - discount + finalShipping + tax

  if (showCheckout) {
    return <Checkout onBack={() => setShowCheckout(false)} />
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleCart} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold flex items-center font-mono">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Shopping Cart ({items.length})
            </h2>
            <Button variant="ghost" size="sm" onClick={toggleCart}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center py-8 font-mono">
                <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4 p-4 border rounded-lg font-mono">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                      <p className="font-semibold">₹{item.price}</p>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Coupon Section */}
          {items.length > 0 && (
            <div className="border-t p-4 font-mono">
              <h3 className="font-medium mb-3">Apply Coupon</h3>
              <div className="space-y-3">
                {!appliedCoupon ? (
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                      className="flex-1"
                    />
                    <Button
                      onClick={applyCoupon}
                      variant="outline"
                      size="sm"
                      className="border-moss-green text-moss-green hover:bg-moss-green hover:text-white bg-transparent"
                    >
                      Apply
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div>
                      <p className="font-medium text-green-800">{appliedCoupon.code}</p>
                      <p className="text-sm text-green-600">{appliedCoupon.description}</p>
                    </div>
                    <Button
                      onClick={removeCoupon}
                      variant="ghost"
                      size="sm"
                      className="text-green-600 hover:text-green-800"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}

                {couponError && <p className="text-sm text-red-600">{couponError}</p>}
              </div>
            </div>
          )}

          {/* Cart Summary */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4 font-mono">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>₹{getTotalPrice()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({appliedCoupon?.code}):</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className={freeDelivery ? "text-green-600" : ""}>{freeDelivery ? "Free" : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (18%):</span>
                  <span>₹{tax}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span>₹{finalTotal}</span>
                </div>
                {(discount > 0 || freeDelivery) && (
                  <div className="text-green-600 text-sm font-medium">
                    You saved ₹{discount + (freeDelivery ? shipping : 0)}!
                  </div>
                )}
              </div>

              <Button
                onClick={() => setShowCheckout(true)}
                className="w-full bg-moss-green hover:bg-moss-green-2 text-white"
              >
                Proceed to Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
