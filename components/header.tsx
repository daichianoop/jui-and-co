"use client"

import { useState } from "react"
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useCartStore } from "@/lib/cart-store"
import { Cart } from "./cart"
import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)
  const { getTotalItems, toggleCart } = useCartStore()

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen)
  }

  return (
      <TooltipProvider>
        {/* Main Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-24">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/">
                  {/* FIX: Wrapped Image for padding and added interactive animations */}
                  <div className="p-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:-rotate-2 active:scale-95">
                    <Image
                        src={"/logo.png"}
                        alt={"logo"}
                        height={50}
                        width={50}
                        className="h-20 w-auto p-3"
                    />
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
                <Link
                    href="/new-arrivals"
                    className="text-gray-800 hover:text-moss-green font-medium transition-colors duration-300 font-mono tracking-wide"
                >
                  NEW ARRIVALS
                </Link>

                <div className="relative group">
                  <button className="flex items-center text-gray-800 hover:text-moss-green font-medium transition-colors duration-300 font-mono tracking-wide">
                    CATEGORIES
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <Link
                        href="/men"
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-moss-green transition-colors font-mono"
                    >
                      Men
                    </Link>
                    <Link
                        href="/women"
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-moss-green transition-colors font-mono"
                    >
                      Women
                    </Link>
                    <Link
                        href="/unisex"
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-moss-green transition-colors font-mono"
                    >
                      Unisex
                    </Link>
                  </div>
                </div>

                <div className="relative group">
                  <button className="flex items-center text-gray-800 hover:text-moss-green font-medium transition-colors duration-300 font-mono tracking-wide">
                    PRINTS
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <Link
                        href="/prints/premium"
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-moss-green transition-colors font-mono"
                    >
                      Premium Prints
                    </Link>
                    <Link
                        href="/prints/daily-wear"
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-moss-green transition-colors font-mono"
                    >
                      Daily Wear
                    </Link>
                  </div>
                </div>

                <Link
                    href="/bestsellers"
                    className="text-gray-800 hover:text-moss-green font-medium transition-colors duration-300 font-mono tracking-wide"
                >
                  BESTSELLERS
                </Link>

                <Link
                    href="/contact"
                    className="text-gray-800 hover:text-moss-green font-medium transition-colors duration-300 font-mono tracking-wide"
                >
                  CONTACT
                </Link>
              </nav>

              {/* Right Icons */}
              <div className="flex items-center space-x-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={window.innerWidth >= 1024 ? toggleSearch : toggleMobileSearch}
                        className={`transition-colors duration-300 text-gray-800 hover:text-moss-green hover:bg-gray-100 ${isSearchOpen || isMobileSearchOpen ? "text-moss-green bg-gray-100" : ""}`}
                    >
                      {isSearchOpen || isMobileSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-mono">Search Products</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-gray-800 hover:text-moss-green hover:bg-gray-100" asChild>
                      <Link href="/about">
                        <Heart className="h-5 w-5" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-mono">About Us</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleCart}
                        className="relative text-gray-800 hover:text-moss-green hover:bg-gray-100"
                    >
                      <ShoppingBag className="h-5 w-5" />
                      {getTotalItems() > 0 && (
                          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse font-medium">
                        {getTotalItems()}
                      </span>
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-mono">Shopping Cart ({getTotalItems()})</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="lg:hidden text-gray-800 hover:text-moss-green hover:bg-gray-100"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                      <Menu className="h-6 w-6" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-mono">Menu</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>

          {/* Desktop Search Bar */}
          {isSearchOpen && (
              <div className="hidden lg:block px-4 sm:px-6 lg:px-8 pb-4 animate-in slide-in-from-top-2 duration-300 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                        type="search"
                        placeholder="Search products..."
                        className="pl-10 bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 text-gray-800 placeholder:text-gray-400 font-mono"
                        autoFocus={isSearchOpen}
                    />
                  </div>
                </div>
              </div>
          )}

          {/* Mobile Search Bar */}
          {isMobileSearchOpen && (
              <div className="lg:hidden px-4 pb-4 bg-white border-t border-gray-200 animate-in slide-in-from-top-2 duration-300">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                      type="search"
                      placeholder="Search products..."
                      className="pl-10 bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 text-gray-800 placeholder:text-gray-400 font-mono"
                      autoFocus={isMobileSearchOpen}
                  />
                </div>
              </div>
          )}
        </header>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
              />
              <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl animate-in slide-in-from-left duration-300 border-r border-gray-200">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-800 tracking-wide font-mono">JUI & Co</h2>
                  {/* FIX: Mobile nav hover color updated to blue */}
                  <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-600 hover:text-moss-green hover:bg-gray-100 rounded-full"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                {/* Navigation Content */}
                <div className="p-6 h-full overflow-y-auto pb-20">
                  {/* Shop By Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-800 tracking-wide uppercase text-sm font-mono">SHOP BY</h3>
                      <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"></div>
                    </div>
                  </div>

                  {/* New Arrivals */}
                  <div className="mb-4">
                    {/* FIX: Mobile nav hover color updated to blue */}
                    <Link
                        href="/new-arrivals"
                        className="block text-gray-800 hover:text-moss-green font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-mono tracking-wide"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                      NEW ARRIVALS
                    </Link>
                  </div>

                  {/* Accordion Navigation */}
                  <Accordion type="single" collapsible className="space-y-2">
                    <AccordionItem value="categories" className="border border-gray-200 rounded-lg overflow-hidden">
                      {/* FIX: Mobile nav hover color updated to blue */}
                      <AccordionTrigger className="font-medium text-gray-800 hover:text-moss-green focus:outline-none focus-visible:ring-0 px-4 py-3 hover:bg-gray-100 transition-all duration-300 [&[data-state=open]]:bg-gray-100 [&[data-state=open]]:text-moss-green">
                        <span className="font-mono tracking-wide">CATEGORIES</span>
                      </AccordionTrigger>
                      <AccordionContent className="bg-gray-50 border-t border-gray-200">
                        <div className="space-y-1 p-2">
                          {/* FIX: Mobile nav hover color updated to blue */}
                          <Link
                              href="/men"
                              className="block text-gray-800 hover:text-moss-green py-2 px-4 rounded-md hover:bg-gray-200 transition-all duration-300 font-mono"
                              onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Men
                          </Link>
                          <Link
                              href="/women"
                              className="block text-gray-800 hover:text-moss-green py-2 px-4 rounded-md hover:bg-gray-200 transition-all duration-300 font-mono"
                              onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Women
                          </Link>
                          <Link
                              href="/unisex"
                              className="block text-gray-800 hover:text-moss-green py-2 px-4 rounded-md hover:bg-gray-200 transition-all duration-300 font-mono"
                              onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Unisex
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="prints" className="border border-gray-200 rounded-lg overflow-hidden">
                      {/* FIX: Mobile nav hover color updated to blue */}
                      <AccordionTrigger className="font-medium text-gray-800 hover:text-moss-green focus:outline-none focus-visible:ring-0 px-4 py-3 hover:bg-gray-100 transition-all duration-300 [&[data-state=open]]:bg-gray-100 [&[data-state=open]]:text-moss-green">
                        <span className="font-mono tracking-wide">PRINTS</span>
                      </AccordionTrigger>
                      <AccordionContent className="bg-gray-50 border-t border-gray-200">
                        <div className="space-y-1 p-2">
                          {/* FIX: Mobile nav hover color updated to blue */}
                          <Link
                              href="/prints/premium"
                              className="block text-gray-800 hover:text-moss-green py-2 px-4 rounded-md hover:bg-gray-200 transition-all duration-300 font-mono"
                              onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Premium
                          </Link>
                          <Link
                              href="/prints/daily-wear"
                              className="block text-gray-800 hover:text-moss-green py-2 px-4 rounded-md hover:bg-gray-200 transition-all duration-300 font-mono"
                              onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Daily Wear
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Direct Links */}
                  <div className="mt-4 space-y-2">
                    {/* FIX: Mobile nav hover color updated to blue */}
                    <Link
                        href="/bestsellers"
                        className="block text-gray-800 hover:text-moss-green font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-mono tracking-wide"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                      BESTSELLERS
                    </Link>
                    <Link
                        href="/contact"
                        className="block text-gray-800 hover:text-moss-green font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-mono tracking-wide"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                      CONTACT
                    </Link>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white">
                  {/* FIX: Mobile nav hover color updated to blue */}
                  <Link
                      href="/login"
                      className="flex items-center text-gray-800 hover:text-moss-green font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-mono"
                      onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="h-4 w-4 mr-3" />
                    Login
                  </Link>
                </div>
              </div>
            </div>
        )}

        <Cart />
      </TooltipProvider>
  )
}