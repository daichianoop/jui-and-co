"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, CreditCard, Smartphone, Truck, Tag, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useCartStore } from "@/lib/cart-store"

interface CheckoutProps {
  onBack: () => void
}

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

export function Checkout({ onBack }: CheckoutProps) {
  const { items, getTotalPrice, clearCart, toggleCart } = useCartStore()
  const [paymentMethod, setPaymentMethod] = useState("whatsapp")
  const [couponCode, setCouponCode] = useState("")
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null)
  const [couponError, setCouponError] = useState("")
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
  })

  const subtotal = getTotalPrice()
  const deliveryCharges = 99
  const tax = Math.round(subtotal * 0.18)

  // Calculate discount
  let discount = 0
  let freeDelivery = false

  if (appliedCoupon) {
    if (appliedCoupon.type === "percentage") {
      discount = Math.round(subtotal * (appliedCoupon.value / 100))
    } else if (appliedCoupon.type === "free_delivery") {
      freeDelivery = true
    }
  }

  const finalDeliveryCharges = freeDelivery ? 0 : deliveryCharges
  const total = subtotal - discount + finalDeliveryCharges + tax

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

  const handleWhatsAppCheckout = () => {
    const orderDetails = items
      .map((item) => `${item.name} (Size: ${item.size}) x${item.quantity} - ₹${item.price * item.quantity}`)
      .join("\n")

    let couponText = ""
    if (appliedCoupon) {
      couponText = `\n*Coupon Applied:* ${appliedCoupon.code} - ${appliedCoupon.description}`
    }

    const message = `🛍️ *New Order*\n\n*Customer Details:*\nName: ${shippingInfo.name}\nPhone: ${shippingInfo.phone}\nAddress: ${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state} - ${shippingInfo.pincode}\n\n*Order Items:*\n${orderDetails}${couponText}\n\n*Order Summary:*\nSubtotal: ₹${subtotal}\nDiscount: ${discount > 0 ? `-₹${discount}` : "₹0"}\nDelivery: ${freeDelivery ? "Free" : `₹${deliveryCharges}`}\nTax: ₹${tax}\n*Total: ₹${total}*\n\nPlease confirm this order!`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/919559545103?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
    clearCart()
    toggleCart()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (paymentMethod === "whatsapp") {
      handleWhatsAppCheckout()
    } else {
      // Handle other payment methods
      alert("Payment method not implemented in demo")
    }
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50" />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl overflow-y-auto">
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h2 className="text-lg font-semibold">Checkout</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Shipping Information */}
            <div>
              <h3 className="font-medium mb-4">Shipping Information</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={shippingInfo.name}
                    onChange={(e) => setShippingInfo((prev) => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={shippingInfo.phone}
                    onChange={(e) => setShippingInfo((prev) => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    required
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo((prev) => ({ ...prev, address: e.target.value }))}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      required
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo((prev) => ({ ...prev, city: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="pincode">Pincode *</Label>
                    <Input
                      id="pincode"
                      required
                      value={shippingInfo.pincode}
                      onChange={(e) => setShippingInfo((prev) => ({ ...prev, pincode: e.target.value }))}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="state">State *</Label>
                  <Input
                    id="state"
                    required
                    value={shippingInfo.state}
                    onChange={(e) => setShippingInfo((prev) => ({ ...prev, state: e.target.value }))}
                  />
                </div>
              </div>
            </div>

            {/* Coupon Section */}
            <div>
              <h3 className="font-mono mb-4">Apply Coupon</h3>
              <div className="space-y-3">
                {!appliedCoupon ? (
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Input
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                      />
                    </div>
                    <Button
                      type="button"
                      onClick={applyCoupon}
                      variant="outline"
                      className="border-moss-green text-moss-green hover:bg-moss-green hover:text-white bg-transparent"
                    >
                      <Tag className="h-4 w-4 mr-1" />
                      Apply
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div>
                      <p className="font-mono text-green-800">{appliedCoupon.code}</p>
                      <p className="text-sm text-green-600">{appliedCoupon.description}</p>
                    </div>
                    <Button
                      type="button"
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

                {/* Available Coupons */}
                <div className="space-y-2">
                  <p className="text-sm font-mono text-gray-700">Available Coupons:</p>
                  {availableCoupons.map((coupon) => (
                    <div
                      key={coupon.code}
                      className={`p-2 border rounded text-sm cursor-pointer transition-colors ${
                        appliedCoupon?.code === coupon.code
                          ? "border-green-300 bg-green-50"
                          : "border-gray-200 hover:border-moss-green"
                      }`}
                      onClick={() => {
                        if (!appliedCoupon) {
                          setCouponCode(coupon.code)
                        }
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-mono">{coupon.code}</span>
                        <span className="text-gray-600">{coupon.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h3 className="font-mono mb-4">Payment Method</h3>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="whatsapp" id="whatsapp" />
                  <Label htmlFor="whatsapp" className="flex items-center gap-2 cursor-pointer">
                    <Smartphone className="h-4 w-4 text-green-600" />
                    WhatsApp Order (Recommended)
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="upi" id="upi" />
                  <Label htmlFor="upi" className="flex items-center gap-2 cursor-pointer">
                    <Smartphone className="h-4 w-4" />
                    UPI Payment
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                    <CreditCard className="h-4 w-4" />
                    Credit/Debit Card
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod" className="flex items-center gap-2 cursor-pointer">
                    <Truck className="h-4 w-4" />
                    Cash on Delivery
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-mono mb-3">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal ({items.length} items):</span>
                  <span>₹{subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({appliedCoupon?.code}):</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Charges:</span>
                  <span className={freeDelivery ? "text-green-600" : ""}>
                    {freeDelivery ? "Free" : `₹${deliveryCharges}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (18%):</span>
                  <span>₹{tax}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span>₹{total}</span>
                </div>
                {(discount > 0 || freeDelivery) && (
                  <div className="text-green-600 text-sm font-mono">
                    You saved ₹{discount + (freeDelivery ? deliveryCharges : 0)}!
                  </div>
                )}
              </div>
            </div>

            {paymentMethod === "whatsapp" && (
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800">
                  Your order details will be sent to our WhatsApp for confirmation. You can pay via UPI, bank transfer,
                  or cash on delivery after confirmation.
                </p>
              </div>
            )}

            <Button type="submit" className="w-full bg-moss-green hover:bg-moss-green-2 text-white">
              {paymentMethod === "whatsapp" ? "Send Order via WhatsApp" : "Place Order"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
