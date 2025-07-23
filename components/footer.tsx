"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image";

export function Footer() {
  return (
      <footer className="bg-black text-baby-powder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Logo and Description Section */}
          <div className="text-center mb-10">
            <Link href="/" className="inline-flex flex-col justify-center items-center space-y-4 mb-6 group">
              {/* FIX: Container and Image size adjusted so the logo fits perfectly */}
              <div className="flex items-center justify-center w-20 h-20 p-1.5 bg-white transition-transform duration-300 group-hover:scale-110">
                <Image
                    src={"/logo.png"}
                    alt={"logo"}
                    height={100}
                    width={100}
                />
              </div>
            </Link>

            <p className="text-baby-powder/80 max-w-md mx-auto font-mono text-sm leading-relaxed mb-8">
              Sustainable fashion with sage and moss green inspired designs. Quality clothing for the conscious consumer.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-4 w-4 text-moss-green" />
                <span className="text-sm font-mono">hello@juiandco.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-4 w-4 text-moss-green" />
                <span className="text-sm font-mono">+91 95595 45103</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-4 w-4 text-moss-green" />
                <span className="text-sm font-mono">Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Navigation Links - 2x2 Grid on Mobile, 4 columns on Desktop */}
          <div className="grid grid-cols-2 gap-8 text-sm lg:grid-cols-4 lg:gap-12 mb-10">
            {/* SHOP */}
            <div className="space-y-4">
              <h3 className="tracking-wide uppercase text-baby-powder font-semibold font-mono text-base">SHOP</h3>
              <ul className="space-y-3">
                <li>
                  {/* FIX: Link updated to href="/" */}
                  <Link
                      href="/"
                      className="text-baby-powder/70 hover:text-baby-powder transition-colors font-mono"
                  >
                    New Arrivals
                  </Link>
                </li>
                <li>
                  {/* FIX: Link updated to href="/" */}
                  <Link href="/" className="text-baby-powder/70 hover:text-baby-powder transition-colors font-mono">
                    Men
                  </Link>
                </li>
                <li>
                  {/* FIX: Link updated to href="/" */}
                  <Link href="/" className="text-baby-powder/70 hover:text-baby-powder transition-colors font-mono">
                    Women
                  </Link>
                </li>
                <li>
                  {/* FIX: Link updated to href="/" */}
                  <Link
                      href="/"
                      className="text-baby-powder/70 hover:text-baby-powder transition-colors font-mono"
                  >
                    Best Sellers
                  </Link>
                </li>
              </ul>
            </div>

            {/* COMPANY */}
            <div className="space-y-4">
              <h3 className="tracking-wide uppercase text-baby-powder font-semibold font-mono text-base">COMPANY</h3>
              <ul className="space-y-3">
                <li>
                  {/* FIX: Link updated to href="/" */}
                  <Link href="/" className="text-baby-powder/70 hover:text-baby-powder transition-colors font-mono">
                    About Us
                  </Link>
                </li>
                <li>
                  {/* FIX: Link updated to href="/" */}
                  <Link
                      href="/"
                      className="text-baby-powder/70 hover:text-baby-powder transition-colors font-mono"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                      href="/privacy"
                      className="text-baby-powder/70 hover:text-baby-powder transition-colors font-mono"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-baby-powder/70 hover:text-baby-powder transition-colors font-mono">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* SUPPORT */}
            <div className="space-y-4">
              <h3 className="uppercase text-baby-powder font-semibold font-mono text-base">SUPPORT</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                      href="/size-guide"
                      className="text-baby-powder/70 hover:text-baby-powder transition-colors font-mono"
                  >
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link
                      href="/shipping"
                      className="text-baby-powder/70 hover:text-baby-powder transition-colors font-mono"
                  >
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link
                      href="/returns"
                      className="text-baby-powder/70 hover:text-baby-powder transition-colors font-mono"
                  >
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-baby-powder/70 hover:text-baby-powder transition-colors font-mono">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* FOLLOW US */}
            <div className="space-y-4 text-center sm:text-left">
              <h3 className="uppercase text-baby-powder font-semibold font-mono text-base">FOLLOW US</h3>
              {/* FIX: Centered icons on mobile (justify-center) and left-aligned on larger screens (sm:justify-start) */}
              <div className="flex justify-center sm:justify-start space-x-4">
                <a
                    href="#"
                    title="Facebook"
                    className="flex items-center justify-center w-10 h-10 text-baby-powder/70 hover:text-baby-powder hover:bg-baby-powder/10 rounded-full transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                    href="#"
                    title="Twitter"
                    className="flex items-center justify-center w-10 h-10 text-baby-powder/70 hover:text-baby-powder hover:bg-baby-powder/10 rounded-full transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                    href="#"
                    title="Instagram"
                    className="flex items-center justify-center w-10 h-10 text-baby-powder/70 hover:text-baby-powder hover:bg-baby-powder/10 rounded-full transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 text-sm text-center text-baby-powder/60 border-t border-baby-powder/20 font-mono">
          {/* FIX: Copyright year updated to 2025 */}
          © 2025 JUI & Co. All rights reserved. | Made with ❤️ for sustainable fashion
        </div>
      </footer>
  )
}