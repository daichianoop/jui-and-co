"use client"

import { useState } from "react"
import { ChevronDown, User } from "lucide-react"
import Link from "next/link"

const categories = ["Men", "Women", "Unisex"]
const prints = ["Premium", "Daily Wear"]
const occasions = ["Casual", "Party Wear", "Professional"]

export function Sidebar() {
  const [isPrintsOpen, setIsPrintsOpen] = useState(false)
  const [isOccasionOpen, setIsOccasionOpen] = useState(false)
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)

  return (
    <aside className="w-80 bg-baby-powder border-r border-sage/20 h-screen overflow-y-auto sticky top-16 transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-sage/20">
        <h2 className="text-xl font-bold text-jet tracking-wide font-serif">JUI & Co</h2>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold tracking-wide text-jet font-mono">SHOP BY</h2>
            <div className="w-6 h-0.5 bg-jet transition-colors duration-300"></div>
          </div>

          {/* New Arrivals - Direct Link */}
          <div className="mb-6">
            <Link
              href="/new-arrivals"
              className="block w-full text-left font-medium text-base tracking-wide text-jet hover:text-moss-green transition-colors duration-300 py-2 font-mono"
            >
              NEW ARRIVALS
            </Link>
          </div>

          {/* Categories Section */}
          <div className="mb-6">
            <details className="group" open={isCategoriesOpen} onToggle={(e) => setIsCategoriesOpen(e.target.open)}>
              <summary className="w-full justify-between p-0 h-auto font-medium text-base tracking-wide text-jet hover:text-moss-green transition-colors duration-300 cursor-pointer flex items-center font-mono list-none">
                CATEGORIES
                <span className="transform group-open:rotate-180 transition-transform duration-300">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <div className="mt-4 space-y-3 pl-4 animate-in slide-in-from-top-2 duration-300">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/${category.toLowerCase()}`}
                    className="block w-full text-left text-sm hover:text-moss-green transition-colors py-1 text-sage font-mono"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </details>
          </div>

          {/* Prints Section */}
          <div className="mb-6">
            <details className="group" open={isPrintsOpen} onToggle={(e) => setIsPrintsOpen(e.target.open)}>
              <summary className="w-full justify-between p-0 h-auto font-medium text-base tracking-wide text-jet hover:text-moss-green transition-colors duration-300 cursor-pointer flex items-center font-mono list-none">
                PRINTS
                <span className="transform group-open:rotate-180 transition-transform duration-300">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <div className="mt-4 space-y-3 pl-4 animate-in slide-in-from-top-2 duration-300">
                {prints.map((print) => (
                  <Link
                    key={print}
                    href={`/prints/${print.toLowerCase().replace(" ", "-")}`}
                    className="block w-full text-left text-sm hover:text-moss-green transition-colors py-1 text-sage font-mono"
                  >
                    {print}
                  </Link>
                ))}
              </div>
            </details>
          </div>

          {/* Occasion Section */}
          <div>
            <details className="group" open={isOccasionOpen} onToggle={(e) => setIsOccasionOpen(e.target.open)}>
              <summary className="w-full justify-between p-0 h-auto font-medium text-base tracking-wide text-jet hover:text-moss-green transition-colors duration-300 cursor-pointer flex items-center font-mono list-none">
                OCCASION
                <span className="transform group-open:rotate-180 transition-transform duration-300">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <div className="mt-4 space-y-3 pl-4 animate-in slide-in-from-top-2 duration-300">
                {occasions.map((occasion) => (
                  <Link
                    key={occasion}
                    href={`/occasion/${occasion.toLowerCase().replace(" ", "-")}`}
                    className="block w-full text-left text-sm hover:text-moss-green transition-colors py-1 text-sage font-mono"
                  >
                    {occasion}
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* Bottom Section - Contact, Login */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sage/20 bg-baby-powder">
        {/* Contact and Login */}
        <div className="space-y-2">
          <Link
            href="/contact"
            className="flex items-center text-jet hover:text-moss-green font-medium py-2 transition-colors duration-300 font-mono"
          >
            Contact
          </Link>
          <Link
            href="/"
            className="flex items-center text-jet hover:text-moss-green font-medium py-2 transition-colors duration-300 font-mono"
          >
            <User className="h-4 w-4 mr-2" />
            Login
          </Link>
        </div>
      </div>
    </aside>
  )
}
